#!/bin/bash

# Build the lastest version of the react app.
yarn --cwd bookapp/ build

# Heroku deployment.
heroku container:push web
heroku container:release web
heroku open
