#!/bin/bash

# command to run:
# ./retry_tests.sh <location> <numberOfWorkers> <number_of_retries> <timeout>
# example: ./retry_tests.sh ./tests/retry_folder 1 2 10000


# Setting default values first
WORKERS=${2:-1}
RETRIES=${3:-1}
TIMEOUT=${4:-30}

# Run the all tests 
npx playwright test $1 --workers $WORKERS

# Wait for the command to finish
wait $!


# Check if myreport.txt exists
if [ ! -f "myreport.txt" ]; then
  echo "All tests passed"
  exit 1
fi

function retry_tests_function() {
  # Set the Internal Field Separator to newline characters
  IFS='
  '

  # Read each line of myreport.txt into an array
  i=0
  while read -r line; do
    array[i]="$line"
    i=$((i+1))
  done < myreport.txt


  # Check if array is empty or if the first element is an empty string
  if [ ${#array[@]} -eq 0 ] || [ -z "${array[0]}" ]; then
    echo "All tests passed"
    exit 1
  fi

  # Initialize the command string
  cmd="npx playwright test"


  # Loop over the array and concatenate the strings to the command
  for i in "${array[@]}"
  do
      cmd+=" $i"
  done

  # Add the --workers flag to the command
  cmd+=" --workers 1"

  # echo "The command is: "
  # echo $cmd
  # Run the command
  eval $cmd
}

for (( c=1; c<=$RETRIES; c++ ))
do
  echo " "
  echo "waiting for $TIMEOUT seconds"
  echo " "
  sleep $TIMEOUT
  retry_tests_function
done


echo "Done with retrying tests"
