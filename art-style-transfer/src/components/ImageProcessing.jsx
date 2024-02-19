import React, { useState } from 'react';

const ImageProcessing = () => {
  const handleImageProcessing = () => {
    const formData = new FormData();
    formData.append('file', 'existing_image.jpg'); // Replace 'existing_image.jpg' with the actual filename

    fetch('/api/image', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to upload image');
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Handle success
    })
    .catch(error => {
      console.error(error); // Handle error
    });
  };

  return (
    <div>
      <button onClick={handleImageProcessing}>Process Image</button>
    </div>
  );
};

export default ImageProcessing;
