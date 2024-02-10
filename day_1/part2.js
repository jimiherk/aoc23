import fs from 'fs';
import {getAnswer} from "./part1.js";

let file = fs.readFileSync('input.txt', 'utf-8');

file = file.split('\r\n');

const numbers = [
    ['one', 'o1e'],
    ['two', 't2o'],
    ['three', 't3e'],
    ['four', '4'],
    ['five', '5e'],
    ['six', '6'],
    ['seven', '7n'],
    ['eight', 'e8'],
    ['nine', '9'],
];

for (let number of numbers) {
    file = file.map((line) => {
        return line.replaceAll(number[0], number[1]);
    });
}

console.log(getAnswer(file));