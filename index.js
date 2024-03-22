const inquirer = require('inquirer');
const fs = require('fs').promises;
const { EOL } = require('os');
const chalk = require('chalk');

async function read(path) {
  const readFile = await fs.readFile(`./${path}`, 'utf-8');
  const readArr = readFile.split(EOL);
  const arr = [];
  for (let i = 0; i < readArr.length; i += 1) {
    if (readArr[i] === '') {
      arr.push({ message: readArr[i - 2], answer: readArr[i - 1] });
    }
  }
  return arr;
}

async function first(arr) {
  const rez = [];
  let num = 0;
  for (let i = 0; i < arr.length; i += 1) {
    rez.push(
      await inquirer.prompt([
        {
          type: 'input',
          name: `input${i}`,
          message: `${arr[i].message}`,
        },
      ])
    );
    const inp = `input${i}`;
    if (rez[i][inp] === arr[i].answer) {
      console.log('Молодец!');
      num += 20;
    } else console.log(`Нет, правильный ответ: ${arr[i].answer}`);
  }
  return num;
}

async function start() {
  const namePath = await vibor();
  const spisok = await read(namePath.path);
  const answer = await first(spisok);

  await log();
  await new Promise((res) => {
    setTimeout(() => {
      res();
    }, 400);
  });
  console.clear();
  console.log(
    `\n${chalk.red('!!!!!!!')} Поздравляем, ${chalk.yellow(
      namePath.name
    )} завершил(а) квест с результатом: ${chalk.yellow(
      answer
    )} из 100 ${chalk.red('!!!!!!!')}`
  );
}

async function vibor() {
  const namePath = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Кто ты воин?',
      validate(qq) {
        if (qq === '') {
          return 'Не молчи!!';
        }
        return true;
      },
    },
    {
      type: 'list',
      name: 'path',
      message: 'Выбери КВИЗ',
      choices: [
        { name: 'Загадки', value: './zagadki.txt' },
        { name: 'Тюремная тематика', value: './tyrma.txt' },
      ],
    },
  ]);
  return namePath;
}

async function log() {
  for (let i = 1; i <= 10; i += 1) {
    console.clear();
    console.log(
      `Подсчет результатов: [${'|'.repeat(i * 2)}${'.'.repeat(
        20 - i * 2
      )}] ${Math.ceil((i * 2) / 20 * 100)} / 100 %`
    );
    await new Promise((res) => {
      setTimeout(() => {
        res();
      }, 200);
    });
  }
}

start();
