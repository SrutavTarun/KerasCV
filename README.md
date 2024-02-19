# KerasResume: Neural Style Transfer for Video Stylization Using KerasCv

KerasResume is a Python project that utilizes neural style transfer techniques implemented with Keras to enhance videos with artistic styles.

## Demo video
https://drive.google.com/file/d/1-iqilJtKyAag5M6h6HutsiE2DEyRYfVp/view?usp=sharing

## Overview

Neural style transfer is a technique that merges the content of one image with the style of another image, resulting in visually appealing and artistic compositions. This project provides a pipeline for performing neural style transfer on images using Keras.

## Features

- Merge the content of one image with the style of another image.
- Customize the strength of content and style transfer.
- Use pre-trained models or train custom models for style transfer.

## Technologies Used

- Python: Programming language used for implementing the neural style transfer algorithm.
- Keras: High-level neural networks API written in Python, running on top of TensorFlow, used for building and training neural networks.
- TensorFlow: Open-source machine learning framework developed by Google, used as the backend for Keras.
- NumPy: Library for numerical computing in Python, used for efficient array operations.

## Installation

1. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/your-username/KerasResume.git
2. Navigate to KerasResume folder
    ```bash
    cd KerasResume
3. Execute requirements.txt
    ```bash
    pip install requirements.txt

## Usage

1. Prepare your content video and style image. These can be any images and videos you choose.
2. Update the paths to your content and style images in the configuration file (`config.yaml`).
3. Optionally, adjust the hyperparameters such as the content weight, style weight, and number of iterations in the configuration file.
4. Run the Python scripts in the following order to perform neural style transfer:
   ```bash
   python frame.py
   python img_color.py
   python reframe.py

## Examples

- Input Video: [giphy.mp4]
- Style Image: [starry.jpg]
- Stylized Video: [my_video.mp4]

