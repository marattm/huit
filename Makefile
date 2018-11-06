# Command lines.

run:
	# Run python server.
	sh ./scripts/run.sh

start:
	# Start react app.
	sh ./scripts/start.sh

test:
	# Test react app.
	sh ./scripts/test.sh

deploy:
	# Deploy staging app to docker
	sh ./scripts/deploy.sh

clean:
	# Clean the container used.
	sh ./scripts/clean.sh

setup:
	# Setup heroku. (One time only)
	sh ./scripts/heroku-setup.sh

heroku:
	# Deploy the containerized app to heroku.
	sh ./scripts/heroku.sh