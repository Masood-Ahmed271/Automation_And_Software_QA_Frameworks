#!/bin/bash

# command to run:
# ./moving_files.sh <numberOfWorkers>

# Run the all tests
npx playwright test --headed --workers $1


# Wait for the command to finish
wait $!

# Get the current time in the format YYYY-MM-DD-HH-MM-SS
current_time=$(date "+%Y-%m-%d-%H-%M-%S")

# Move the test results to the root directory
mkdir -p Final-Videos/$current_time
mv test-results/* Final-Videos/$current_time
rm -rf test-results/*