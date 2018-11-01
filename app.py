import os
from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='bookapp/build')

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists("bookapp/build/" + path):
        return send_from_directory('bookapp/build', path)
    else:
        return send_from_directory('bookapp/build', 'index.html')

@app.route('/api/v0/health')
def check():
    return 'Healthy!'


if __name__ == '__main__':
    app.run(use_reloader=True, port=5005, threaded=True)