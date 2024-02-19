const VideoProcessing = () => {
  const handleVideoProcessing = () => {
    const formData = new FormData();
    formData.append("file", document.getElementById("video-file").files[0]);

    fetch("http://127.0.0.1:5000/api/video", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to upload video");
        }
        return response.text(); // Use text() instead of json()
      })
      .then((data) => {
        console.log(data); // The response will be in text format
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <input type="file" id="video-file" accept="video/*" />
      <button onClick={handleVideoProcessing}>Process Video</button>
    </div>
  );
};

export default VideoProcessing;
