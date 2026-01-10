const API_URL = 'http://localhost:5000/api';

// Auth API calls
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Login failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Client API calls
export const getClients = async () => {
  try {
    const response = await fetch(`${API_URL}/clients`);

    if (!response.ok) {
      throw new Error('Failed to fetch clients');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching clients:', error);
    return [];
  }
};

// Upload client logo file
export const uploadClientImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(`${API_URL}/clients/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to upload client image');
    }

    return await response.json();
  } catch (error) {
    console.error('Error uploading client image:', error);
    throw error;
  }
};

export const getClient = async (id) => {
  try {
    const response = await fetch(`${API_URL}/clients/${id}`);

    if (!response.ok) {
      throw new Error('Failed to fetch client');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching client:', error);
    throw error;
  }
};

export const addClient = async (clientData) => {
  try {
    const response = await fetch(`${API_URL}/clients`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to add client');
    }

    return await response.json();
  } catch (error) {
    console.error('Error adding client:', error);
    throw error;
  }
};

export const updateClient = async (id, clientData) => {
  try {
    const response = await fetch(`${API_URL}/clients/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to update client');
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating client:', error);
    throw error;
  }
};

export const deleteClient = async (id) => {
  try {
    const response = await fetch(`${API_URL}/clients/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to delete client');
    }

    return await response.json();
  } catch (error) {
    console.error('Error deleting client:', error);
    throw error;
  }
};

// Gallery API calls
export const getGalleryImages = async () => {
  try {
    const response = await fetch(`${API_URL}/gallery`);

    if (!response.ok) {
      throw new Error('Failed to fetch gallery images');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return [];
  }
};

// Upload gallery image file
export const uploadGalleryImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(`${API_URL}/gallery/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to upload gallery image');
    }

    return await response.json();
  } catch (error) {
    console.error('Error uploading gallery image:', error);
    throw error;
  }
};

export const getGalleryImage = async (id) => {
  try {
    const response = await fetch(`${API_URL}/gallery/${id}`);

    if (!response.ok) {
      throw new Error('Failed to fetch gallery image');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching gallery image:', error);
    throw error;
  }
};

export const addGalleryImage = async (imageData) => {
  try {
    const response = await fetch(`${API_URL}/gallery`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(imageData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to add gallery image');
    }

    return await response.json();
  } catch (error) {
    console.error('Error adding gallery image:', error);
    throw error;
  }
};

export const updateGalleryImage = async (id, imageData) => {
  try {
    const response = await fetch(`${API_URL}/gallery/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(imageData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to update gallery image');
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating gallery image:', error);
    throw error;
  }
};

export const deleteGalleryImage = async (id) => {
  try {
    const response = await fetch(`${API_URL}/gallery/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to delete gallery image');
    }

    return await response.json();
  } catch (error) {
    console.error('Error deleting gallery image:', error);
    throw error;
  }
};