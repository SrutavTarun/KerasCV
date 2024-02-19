import os
from flask import Flask, request, jsonify
from subprocess import run
from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
# CORS(app, support_credentials=True)
CORS(app)

@app.route("/login")
@cross_origin(supports_credentials=True)
def login():
  return jsonify({'success': 'ok'})

app = Flask(__name__)

@app.route('/api/video', methods=['POST'])
def video():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    video_file = request.files['file']
    if video_file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    # Save the uploaded video to a temporary location
    video_path = './static/output/video.mp4'  # Change the path if needed
    print("check 1")
    video_file.save(video_path)

    try:
        # Run img_color.py script with the uploaded video as input
        run(['python', 'img_color.py', '--input', video_path, '--output', './static/output/output_video.mp4'])
        print("check 2")

        # Optionally, delete the temporary video file
        os.remove(video_path)
        print("check 3")

        return jsonify({'success': True}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
  app.run(host='0.0.0.0', debug=True)
