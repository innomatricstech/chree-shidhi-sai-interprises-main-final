import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { getClients, getGalleryImages } from '../../services/api';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

const AdminDashboard = () => {
  const [clientCount, setClientCount] = useState(0);
  const [galleryCount, setGalleryCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Get counts from API
        const clients = await getClients();
        const galleryImages = await getGalleryImages();

        setClientCount(clients.length);
        setGalleryCount(galleryImages.length);
      } catch (err) {
        setError('Failed to load dashboard data');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} flex`}>
      <Sidebar />

      <div className="flex-1 lg:ml-64">
        <div className="py-6 px-4 sm:px-6 lg:px-8 min-h-screen">
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Admin Dashboard</h1>

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Clients Card */}
            <div className={`${darkMode ? 'bg-dark-primary' : 'bg-white'} overflow-hidden shadow rounded-lg`}>
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-amber-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} truncate`}>
                        Total Clients
                      </dt>
                      <dd>
                        <div className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {clientCount}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className={`${darkMode ? 'bg-dark-secondary' : 'bg-gray-50'} px-4 py-4 sm:px-6`}>
                <div className="text-sm">
                  <Link to="/admin/clients" className="font-medium text-amber-600 hover:text-amber-500">
                    Manage Clients <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Gallery Card */}
            <div className={`${darkMode ? 'bg-dark-primary' : 'bg-white'} overflow-hidden shadow rounded-lg`}>
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-amber-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} truncate`}>
                        Gallery Images
                      </dt>
                      <dd>
                        <div className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {galleryCount}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className={`${darkMode ? 'bg-dark-secondary' : 'bg-gray-50'} px-4 py-4 sm:px-6`}>
                <div className="text-sm">
                  <Link to="/admin/gallery" className="font-medium text-amber-600 hover:text-amber-500">
                    Manage Gallery <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Admin Information */}
            <div className={`col-span-1 md:col-span-2 mt-8 ${darkMode ? 'bg-dark-primary' : 'bg-white'} shadow overflow-hidden sm:rounded-lg`}>
              <div className="px-4 py-5 sm:px-6">
                <h3 className={`text-lg leading-6 font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Admin Information
                </h3>
                <p className={`mt-1 max-w-2xl text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                  Quick guide for managing your website content.
                </p>
              </div>
              <div className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <dl>
                  <div className={`${darkMode ? 'bg-dark-secondary' : 'bg-gray-50'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                    <dt className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                      Managing Clients
                    </dt>
                    <dd className={`mt-1 text-sm ${darkMode ? 'text-gray-200' : 'text-gray-900'} sm:mt-0 sm:col-span-2`}>
                      Add, edit, or remove client logos that appear on the homepage and clients page.
                    </dd>
                  </div>
                  <div className={`${darkMode ? 'bg-dark-primary' : 'bg-white'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                    <dt className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                      Managing Gallery
                    </dt>
                    <dd className={`mt-1 text-sm ${darkMode ? 'text-gray-200' : 'text-gray-900'} sm:mt-0 sm:col-span-2`}>
                      Add, edit, or remove images that appear in the gallery section of the website.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
