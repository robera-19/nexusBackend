

// Import the 'fs/promises' module to work with 
//the file system using Promises and async/await
const fs = require('fs/promises');

// Define an asynchronous function to read multiple files
async function readFiles() {

  try {
    // Array containing the filenames to be read
    const files = ['a.txt', 'b.txt', 'c.txt'];
    let totalChars = 0;

    // Loop through each file in the array
    for (const file of files) {

      const content = await fs.readFile(file, 'utf-8');
      console.log(`Content of ${file}:`);
      console.log(content);
      totalChars += content.length;
      console.log('----------------');

    }

    // Add the number of characters in this file to the total
    console.log(`Total number of characters: ${totalChars}`);
  }
   catch (err) {
    console.error('Error reading files:', err);
  }
}

readFiles();
