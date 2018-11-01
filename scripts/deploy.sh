#!/bin/bash

# Build the lastest version of the react app.
yarn --cwd bookapp/ build

# Build the images and run them into containers
docker build -t app .
docker run -d -p 5005:5005 -e PORT=5005 --rm --name app-server app

# Open Web Browser
open -a "Google Chrome" 'http://127.0.0.1:5005/'