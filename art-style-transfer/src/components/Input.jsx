import React, { useState } from 'react';

import './styles/inputImage.css';

const InputVideo = () => {
    const [video, setVideo] = useState(null);
  
    const handleVideoUpload = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onloadend = () => {
        setVideo(reader.result);
      };
  
      if (file) {
        reader.readAsDataURL(file);
      } else {
        setVideo(null);
      }
    };
  
    return (
      <div className='input-video'>
        <input type="file" accept="video/*" onChange={handleVideoUpload} />
        {video && (
          <video controls src={video} alt="Uploaded content" />
        )}
      </div>
    );
  }
  
  export default InputVideo;
