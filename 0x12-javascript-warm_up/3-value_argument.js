#!/usr/bin/node

// Check if any argument is passed
if (process.argv[2] !== undefined) {
  // Print the first argument
  console.log(process.argv[2]);
} else {
  // No argument is passed
  console.log("No argument");
}

