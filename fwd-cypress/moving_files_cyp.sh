#!/bin/bash

# command to run: ./moving_files_cyp.sh and don't forget to change the mode to make the file executable by `chmod +x moving_files_cyp.sh`

# Run the all tests
npx cypress run --headed

# Wait for the command to finish
wait $!

# Get the current time in the format YYYY-MM-DD-HH-MM-SS
current_time=$(date "+%Y-%m-%d-%H-%M-%S")

# Move the test results to the root directory
mkdir -p Final-Videos/$current_time/videos
mkdir -p Final-Videos/$current_time/screenshots
mv cypress/videos/* Final-Videos/$current_time/videos
mv cypress/videos/* Final-Videos/$current_time/screenshots
rm -rf cypress/videos/*
rm -rf cypress/screenshots/*