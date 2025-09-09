'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TestImagePage() {
  const [imageStatus, setImageStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [imagePath, setImagePath] = useState('/images/fracture-trauma-care.webp');
  
  useEffect(() => {
    console.log('Testing image path:', imagePath);
  }, [imagePath]);

  const handleImageLoad = () => {
    console.log('Image loaded successfully');
    setImageStatus('loaded');
  };

  const handleImageError = () => {
    console.log('Image failed to load');
    setImageStatus('error');
    
    // Try fallback to jpg
    if (imagePath.endsWith('.webp')) {
      const jpgPath = imagePath.replace('.webp', '.jpg');
      console.log('Trying fallback to:', jpgPath);
      setImagePath(jpgPath);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Image Test Page</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Testing Fracture & Trauma Care Image</h2>
          
          <div className="mb-4">
            <p className="text-gray-700 mb-2">Current image path: {imagePath}</p>
            <p className="text-gray-700">Status: {imageStatus}</p>
          </div>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 mb-4">
            <Image
              src={imagePath}
              alt="Test Image"
              width={400}
              height={300}
              className="object-contain w-full h-64"
              onLoadingComplete={handleImageLoad}
              onError={handleImageError}
            />
          </div>
          
          {imageStatus === 'error' && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <p>Failed to load image. Check the browser console for more details.</p>
            </div>
          )}
          
          {imageStatus === 'loaded' && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              <p>Image loaded successfully!</p>
            </div>
          )}
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-semibold mb-4">Testing Control Image</h2>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 mb-4">
            <Image
              src="/images/test-image.png"
              alt="Control Test Image"
              width={400}
              height={300}
              className="object-contain w-full h-64"
              onLoadingComplete={() => console.log('Control image loaded successfully')}
              onError={() => console.log('Control image failed to load')}
            />
          </div>
          
          <p className="text-gray-700">
            If you can see the blue square above, then image loading is working correctly in general.
            If you can&apos;t see the Fracture & Trauma Care image but can see this test image, 
            then there may be an issue with the specific image file.
          </p>
        </div>
      </div>
    </div>
  );
}