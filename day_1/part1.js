import fs from 'fs';

let file = fs.readFileSync('input.txt', 'utf-8');

file = file.split('\r\n');

export function getAnswer(input) {
    let sum = 0;

    for (let code of input) {
        let first = undefined, last = undefined;

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

    return sum;
}