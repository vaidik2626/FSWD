const os = require('os');

function displayMemoryInfo() {
  // Get total system memory in bytes
  const totalMemoryBytes = os.totalmem();

  // Get free system memory in bytes
  const freeMemoryBytes = os.freemem();

  // Calculate the percentage of free memory
  const percentageFreeMemory = ((freeMemoryBytes / totalMemoryBytes) * 100).toFixed(2);

  // Convert memory sizes to human-readable format
  const formatBytes = (bytes) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Byte';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
  };

  // Display the memory information
  console.log('Total System Memory:', formatBytes(totalMemoryBytes));
  console.log('Free Memory:', formatBytes(freeMemoryBytes));
  console.log('Percentage of Free Memory:', percentageFreeMemory + '%');
}

// Call the function to display memory information
displayMemoryInfo();
