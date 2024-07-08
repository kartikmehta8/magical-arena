const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

/**
 * Recursively runs all test files ending with '.test.js' found in the specified directory.
 * Logs each test file being executed and handles test failures by exiting the process with an error code.
 * @param {string} dir - The directory path containing test files.
 * @example
 * runTests(path.join(__dirname, 'tests'));
 */
function runTests(dir) {
  // Read all files and directories in the specified directory
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Recursively run tests in subdirectories
      runTests(fullPath);
    } else if (file.endsWith(".test.js")) {
      // Execute test file if it ends with '.test.js'
      try {
        console.log(`Running test: ${fullPath}`);
        execSync(`node ${fullPath}`, { stdio: "inherit" });
      } catch (error) {
        // Log and exit on test failure
        console.error(`Test failed: ${fullPath}`);
        process.exit(1);
      }
    }
  });
}

/**
 * Entry point to start running tests in a specified directory.
 */
runTests(path.join(__dirname, "tests"));

/**
 * Export the runTests function to be used throughout the application.
 * @module runTests
 */
module.exports = runTests;
