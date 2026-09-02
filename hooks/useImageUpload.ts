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
      
      setIsUploading(false);
      return imageUrl;
    } catch (err: any) {
      console.error('Image upload failed:', err);
      setError(err.response?.data?.message || 'Failed to upload image');
      setIsUploading(false);
      return null;
    }
  };

  return { uploadImage, isUploading, error };
};
