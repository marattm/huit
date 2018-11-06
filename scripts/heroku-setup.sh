#!/bin/bash

# heroku deployment
heroku login
REPO=$(heroku create | cut -d'/' -f 3 | cut -d'.' -f 1)
echo $REPO
git init
heroku git:remote -a $REPO
