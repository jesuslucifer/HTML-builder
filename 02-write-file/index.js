const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;
const input = fs.createWriteStream(path.join(__dirname, 'text.txt'), 'utf-8');

stdout.write('Hello, write you text:\n');
stdin.on('data', data => {
    if (data.toString().trim() === 'exit') {
        process.exit();
    } else {
        input.write(data, 'utf-8');
    }
})

process.on('SIGINT', ()=> {
    process.exit();
})

process.on('exit', () => {
    console.log('Goodbye!');
})