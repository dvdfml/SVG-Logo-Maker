const inquirer = require('inquirer');
const { Circle, Triangle } = require('./lib/shapes');
const fs = require('fs');
const { error } = require('console');

async function main() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: "Type three or less characters:",
            validate: async (input) => {
                if (input.length <= 3) {
                    return true;
                }
                return "Invalid number of characters";
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: "Enter the text color (word or hexadecimal code):"
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'rectangle']
        },
        {
            type: 'input',
            name: 'color',
            message: 'Enter the shape color (word or hecadecimal code):'
        }
    ]);

    switch (answers.shape) {
        case 'circle':
            const shape = new Circle(answers.color, answers.text, answers.textColor);
            console.log(shape.render());
            const data = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
</svg>`;
            fs.writeFile('./examples/logo.svg', data, (err) =>
                err ? console.error(err) : console.log('Success!')
            );
            break;
    }
}

main();