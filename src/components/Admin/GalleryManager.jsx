import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import { getGalleryImages, addGalleryImage, updateGalleryImage, deleteGalleryImage, uploadGalleryImage } from '../../services/api';

const GalleryManager = () => {
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({ title: '', imageUrl: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const imageData = await getGalleryImages();
      setImages(imageData);
    } catch (err) {
      setError('Failed to load gallery images. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenModal = (image = null) => {
    if (image) {
      setCurrentImage(image);
      setIsEditing(true);
    } else {
      setCurrentImage({ title: '', imageUrl: '' });
      setIsEditing(false);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentImage({ title: '', imageUrl: '' });
    setIsEditing(false);
    setUploadedFile(null);
    setIsUploading(false);
    setUploadProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentImage({ ...currentImage, [name]: value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFile(file);

      // Create a preview URL
      const previewUrl = URL.createObjectURL(file);
      setCurrentImage(prev => ({ ...prev, imageUrl: previewUrl }));
    }
  };

  const handleFileUpload = async () => {
    if (!uploadedFile) return;

    try {
      setIsUploading(true);
      setUploadProgress(0);

      // Simulate progress (in a real app, you might use XMLHttpRequest with progress events)
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 300);

      // Upload the file
      const result = await uploadGalleryImage(uploadedFile);

      // Clear the interval and set progress to 100%
      clearInterval(progressInterval);
      setUploadProgress(100);

      // Update the image URL with the one from the server
      setCurrentImage(prev => ({ ...prev, imageUrl: result.imageUrl }));

      // Reset upload state
      setTimeout(() => {
        setIsUploading(false);
        setUploadProgress(0);
      }, 500);

      return result.imageUrl;
    } catch (error) {
      setError('Failed to upload image: ' + error.message);
      setIsUploading(false);
      setUploadProgress(0);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentImage.title) {
      alert('Please enter an image title');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      // If there's an uploaded file, upload it first
      let finalImageUrl = currentImage.imageUrl;
      if (uploadedFile && !isEditing) {
        finalImageUrl = await handleFileUpload();
        if (!finalImageUrl) {
          setIsLoading(false);
          return; // Exit if upload failed
        }
      }

      const imageData = {
        ...currentImage,
        imageUrl: finalImageUrl
      };

      if (isEditing) {
        await updateGalleryImage(currentImage._id, imageData);
      } else {
        await addGalleryImage(imageData);
      }

      await loadImages();
      handleCloseModal();

      // Reset the uploaded file
      setUploadedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (err) {
      setError(`Failed to ${isEditing ? 'update' : 'add'} image. Please try again.`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      try {
        setIsLoading(true);
        setError(null);
        await deleteGalleryImage(id);
        await loadImages();
      } catch (err) {
        setError('Failed to delete image. Please try again.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const filteredImages = images.filter(image =>
    image.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />

      <div className="flex-1 lg:ml-64">
        <div className="py-6 px-4 sm:px-6 lg:px-8 min-h-screen">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Manage Gallery</h1>
            <button
              onClick={() => handleOpenModal()}
              className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              Add New Image
            </button>
          </div>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Search images..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {error && (
            <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          {isLoading ? (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.length > 0 ? (
                filteredImages.map((image) => (
                  <div key={image._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={image.imageUrl}
                        alt={image.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/assets/placeholder.svg';
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-900 truncate">{image.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Added: {new Date(image.createdAt).toLocaleDateString()}
                      </p>
                      <div className="mt-4 flex space-x-2">
                        <button
                          onClick={() => handleOpenModal(image)}
                          className="flex-1 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(image._id)}
                          className="flex-1 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center text-gray-500 py-8">
                  No images found. Add a new image to get started.
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Add/Edit Image Modal */}
      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {isEditing ? 'Edit Image' : 'Add New Image'}
                      </h3>
                      <div className="mt-2">
                        <div className="mb-4">
                          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Image Title
                          </label>
                          <input
                            type="text"
                            name="title"
                            id="title"
                            className="mt-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={currentImage.title}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Image Upload
                          </label>
                          <div className="flex flex-col space-y-2">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleFileChange}
                              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100"
                              ref={fileInputRef}
                            />
                            {isUploading && (
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                  className="bg-amber-500 h-2.5 rounded-full"
                                  style={{ width: `${uploadProgress}%` }}
                                ></div>
                              </div>
                            )}
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            Upload an image file (JPG, PNG, etc.)
                          </p>
                        </div>

                        <div className="mb-4">
                          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
                            Or Enter Image URL
                          </label>
                          <input
                            type="text"
                            name="imageUrl"
                            id="imageUrl"
                            className="mt-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={currentImage.imageUrl}
                            onChange={handleInputChange}
                            placeholder="https://example.com/image.jpg"
                          />
                          <p className="mt-1 text-sm text-gray-500">
                            Optional if uploading a file
                          </p>
                        </div>
                        {currentImage.imageUrl && (
                          <div className="mt-4 flex justify-center">
                            <img
                              src={currentImage.imageUrl}
                              alt="Preview"
                              className="max-h-48 w-auto object-contain"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/assets/placeholder.svg';
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-amber-500 text-base font-medium text-white hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 sm:ml-3 sm:w-auto sm:text-sm disabled:bg-amber-300"
                  >
                    {isLoading ? (isEditing ? 'Updating...' : 'Adding...') : (isEditing ? 'Update' : 'Add')}
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryManager;
