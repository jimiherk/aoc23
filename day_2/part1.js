import fs from 'fs';

const input = fs.readFileSync('./input.txt', 'utf8');

let games = input.split('\r\n');

let max = {
    red: 12,
    green: 13,
    blue: 14,
};

let sum = 0;

for (let game of games) {
    game = game.split(': ');

    let gameID = game[0].replace('Game ', '');

    let subsets = game[1].split('; ');

    let gameIsPossible = true;

    for (let subset of subsets) {
        subset = subset.split(', ');

        let cubes = {
            red: 0,
            green: 0,
            blue: 0,
        };

        for (let color of subset) {
            if (color.endsWith('red')) {
                color.replace(' red', '');
                cubes.red = parseInt(color);
            } else if (color.endsWith('green')) {
                color.replace(' green', '');
                cubes.green = parseInt(color);
            } else if (color.endsWith('blue')) {
                color.replace(' blue', '');
                cubes.blue = parseInt(color);
            }
        }

        if (cubes.red > max.red || cubes.green > max.green || cubes.blue > max.blue) {
            gameIsPossible = false;
            break;
        }
    }

    if (gameIsPossible) {
        sum += parseInt(gameID);
    }
}

console.log(sum);