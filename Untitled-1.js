const inquirer = require('inquirer');
const terminalLink = require('terminal-link');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'size',
      message: 'What size do you need?',
      choices: [
        'Jumbo',
        'Large',
        'Standard',
        'Medium',
        'Small',
        `Micro which is truly and surely the ${terminalLink(
          'very very very very very very smallest',
          'https://www.google.com/search?q=very+very+very+very+very+very+very+very+very+very+long'
        )}`,
      ],
      filter(val) {
        return val.toLowerCase();
      },
    },
  ])
  .then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });
