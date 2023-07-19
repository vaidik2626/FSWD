
const chalk = require('chalk');
const upperCase = require('upper-case');

const message = 'hello, chalk and upper-case modules!';
console.log(chalk.blue('Hello world!'));
// Convert the message to uppercase using upper-case module
const upperCaseMessage = upperCase(message);

// Apply colored formatting using chalk
const formattedMessage = chalk.bold.green(upperCaseMessage);

console.log(formattedMessage);
