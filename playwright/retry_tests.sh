#!/bin/bash

# command to run:
# ./retry_tests.sh <location> <numberOfWorkers>
# example: ./retry_tests.sh ./tests/retry_folder 1


# Run the all tests 
npx playwright test $1 --workers $2 > myreport.txt

# Wait for the command to finish
wait $!


# Check if myreport.txt exists
if [ ! -f "myreport.txt" ]; then
  echo "All tests passed"
  exit 1
fi

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

echo "The command is: "
echo $cmd
# Run the command
eval $cmd


echo "Done with retrying tests"
