const chalk = require('chalk');

async function catLogo(namePath, answer) {
  const cat = `▒▒▒▒▒█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
▒▒▒▒▒█░▒▒▒▒▒▒▒▓▒▒▓▒▒▒▒▒▒▒░█
▒▒▒▒▒█░▒▒▓▒▒▒▒▒▒▒▒▒▄▄▒▓▒▒░█░▄▄
▄▀▀▄▄█░▒▒▒▒▒▒▓▒▒▒▒█░░▀▄▄▄▄▄▀░░█
█░░░░█░▒▒▒▒▒▒▒▒▒▒▒█░░░░░░░░░░░█
▒▀▀▄▄█░▒▒▒▒▓▒▒▒▓▒█░░░█▒░░░░█▒░░█
▒▒▒▒▒█░▒▓▒▒▒▒▓▒▒▒█░░░░░░░▀░░░░░█
▒▒▒▄▄█░▒▒▒▓▒▒▒▒▒▒▒█░░█▄▄█▄▄█░░█
▒▒▒█░░░█▄▄▄▄▄▄▄▄▄▄█░█▄▄▄▄▄▄▄▄▄█
▒▒▒█▄▄█░░█▄▄█░░░░░░█▄▄█░░█▄▄█
`;

  for (let i = 0; i <= cat.length; i += 1) {
    console.clear();
    console.log(
      `\n${chalk.red('!!!!!!!')} Поздравляем, ${chalk.yellow(
        namePath
      )} завершил(а) квест с результатом: ${chalk.yellow(
        answer
      )} из 100 ${chalk.red('!!!!!!!')}\n\n`
    );
    console.log(cat.slice(0, i));
    await new Promise((res) => {
      setTimeout(() => {
        res();
      });
    }, 100);
  }
}

module.exports = catLogo;
