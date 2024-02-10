import fs from 'fs';

const input = fs.readFileSync('./input.txt', 'utf8');

let games = input.split('\r\n');

let sum = 0;

for (let game of games) {
    game = game.split(': ');

    let gameID = game[0].replace('Game ', '');

    let subsets = game[1].split('; ');

    for (let subset of subsets) {
        subset = subset.split(', ');

        let min = {
            red: 0,
            green: 0,
            blue: 0,
        };

        for (let color of subset) {
            if (color.endsWith('red')) {
                color.replace(' red', '');
                let temp = parseInt(color);
                if (temp > min.red) {
                    min.red = temp;
                }
            } else if (color.endsWith('green')) {
                color.replace(' green', '');
                let temp = parseInt(color);
                if (temp > min.green) {
                    min.green = temp;
                }
            } else if (color.endsWith('blue')) {
                color.replace(' blue', '');
                let temp = parseInt(color);
                if (temp > min.blue) {
                    min.blue = temp;
                }
            }
        }

        sum += (min.red * min.green * min.blue);
    }
}

console.log(sum);