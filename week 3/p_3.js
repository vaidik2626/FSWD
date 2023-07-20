const chalk = require('chalk');
console.log(chalk.blue('This text will be displayed in blue!'));
console.log(chalk.bold.green('This text will be displayed in bold green!'));
console.log(chalk.bgYellow.black('This text will have a yellow background with black text!'));

const text = 'hello, world!';
const uppercasedText = text.toUpperCase();
console.log(uppercasedText); 
