import fs from 'fs';

const numbers = [
    ['one', '1'],
    ['two', '2'],
    ['three', '3'],
    ['four', '4'],
    ['five', '5'],
    ['six', '6'],
    ['seven', '7'],
    ['eight', '8'],
    ['nine', '9'],
];

let input = fs.readFileSync('input.txt', 'utf-8');

input = input.split('\n');

let sum = 0;

for (let code of input) {
    let first = undefined, last = undefined;

    for (let number of numbers) code.replaceAll(number[0], number[1]);

    // Find first digit
    for (let i = 0; i < code.length; i++) {
        if (!isNaN(code[i])) {
            first = parseInt(code[i]);
            break;
        }
    }

    // Find last digit
    for (let i = code.length - 1; i >= 0; i--) {
        if (!isNaN(code[i])) {
            last = parseInt(code[i]);
            break;
        }
    }

    let calibrationValue = (10 * first) + last;

    sum += calibrationValue;
}

console.log(sum);
