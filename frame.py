from moviepy.editor import VideoFileClip


video_path="static\input\giphy.mp4"
video = VideoFileClip(video_path)

frame_rate = 10  # Number of frames per second
frames = [frame for frame in video.iter_frames(fps=frame_rate)]

from PIL import Image

output_folder = "static\output\out_vid"
for i, frame in enumerate(frames):
    image = Image.fromarray(frame)  # Convert NumPy array to image
    image.save(f"{output_folder}/frame_{i}.png")

