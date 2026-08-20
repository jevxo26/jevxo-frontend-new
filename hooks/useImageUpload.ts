import { useState } from 'react';
import api from './baseApi';

export const useImageUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadImage = async (file: File): Promise<string | null> => {
    setIsUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append('image', file);

    try {
      // Assuming your backend expects POST /uploads for the image
      const response = await api.post('/uploads', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      // The backend returns { url: "/cdn/filename.ext", ... }
      const imageUrl = response.data.url;
      
      // Since your frontend is running on a different port than the backend,
      // and baseApi's baseURL points to the backend (e.g., localhost:3000 or api.jevxo.com)
      // we need to return the full URL if we want the image to be displayed correctly in next.js,
      // or we can configure the backend URL dynamically.
      // But typically storing just the relative /cdn/... URL is fine if the frontend appends the base API URL to it 
      // or if we store the full URL. Let's construct the full URL.
      
      const baseURL = process.env.NEXT_PUBLIC_API_URL || 'https://www.api.jevxo.com';
      const fullUrl = `${baseURL}${imageUrl}`;
      
      setIsUploading(false);
      return fullUrl;
    } catch (err: any) {
      console.error('Image upload failed:', err);
      setError(err.response?.data?.message || 'Failed to upload image');
      setIsUploading(false);
      return null;
    }
  };

  return { uploadImage, isUploading, error };
};
