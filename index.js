const inquirer = require('inquirer');
const fs = require('fs').promises;
const { EOL } = require('os');

async function read(path) {
  const readFile = await fs.readFile(`./topics/${path}`, 'utf-8');
  const readArr = readFile.split(EOL);
  const arr = [];
  for (let i = 0; i < readArr.length; i += 1) {
    if (readArr[i] === '') {
      arr.push({ message: readArr[i - 2], answer: readArr[i - 1] });
    }
  }
  console.log(arr);
  return arr;
}

async function first(arr) {
  const rez = [];
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
    if (rez[i][inp] === arr[i].answer) console.log('Молодец!');
    else console.log(`Нет, правильный ответ: ${arr[i].answer}`);
  }
  return rez;
}

async function start() {
  const namePath = await vibor();
  const spisok = await read(namePath.path);
  const answer = await first(spisok);
  console.log(`Поздравляем, ${namePath.name} завершили квест`);
}

start();

async function vibor() {
  const namePath = await inquirer.prompt([
    {
      type: 'input',
      name: 'Name',
      message: 'Введите имя: ',
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
