const os = require('os');

// Get the current username
const username = os.userInfo().username;

// Get the home directory
const homedir = os.homedir();

// Get the OS platform
const platform = os.platform();

console.log('Current Username:', username);
console.log('Home Directory:', homedir);
console.log('OS Platform:', platform);