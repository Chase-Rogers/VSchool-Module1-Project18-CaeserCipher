var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

const caeserCipher = (input = "none", shift = 1) => {
    console.log(input.replace(/[a-z]/g, e => String.fromCharCode((e.charCodeAt(0)-97 + shift ) % 26 + 97)));
}

caeserCipher(input, shift);