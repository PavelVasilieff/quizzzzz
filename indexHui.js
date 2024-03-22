const fs = require("fs").promises;
const inquirer = require("inquirer");

function second() {
  inquirer.prompt([
    // {
    //   type: "input",
    //   name: "name",
    //   message: "Кто ты, Воин?",
    //   validate: (answer) => {
    //     if (answer === "") {
    //       return "Назови себя!";
    //     }
    //     return true;
    //   },
    // },

    {
        type: "input",
        name: "question1",
        message: "Какой болезнью никто не болеет на суше?",
        validate: (answer) => {
          if (answer === "Морской") {
           return true
          } else {
            console.log("\nНет, правильный ответ: Морской");
          }
        },
      },
    {
      type: "input",
      name: "question2",
      message: "Какой болезнью никто не болеет на суше?",
      validate: (answer) => {
        if (answer === "Морской") {
          return true
        } else {
          console.log("\nНет, правильный ответ: Морской");
        }
      },
    },
    {
      type: "input",
      name: "question3",
      message:
        "Что бросают тогда, когда это необходимо, и поднимают тогда, когда это уже не нужно?",
      validate: (answer) => {
        if (answer === "Якорь") {
          console.log("\nМолодец, go next");
        } else {
          console.log("\nНет, правильный ответ: Якорь");
        }
      },
    },
    {
      type: "input",
      name: "question3",
      message: "С когтями, а не птица, летит и матерится.",
      validate: (answer) => {
        if (answer === "Электромонтер") {
          console.log("\nМолодец, go next");
        } else {
          console.log("\nНет, правильный ответ: Электромонтер");
        }
        return true;
      },
    },
    {
      type: "input",
      name: "question4",
      message: "Остров, выдающий себя за одежду.",
      validate: (answer) => {
        if (answer === "Ямайка") {
          console.log("\nМолодец, go next");
          return true;
        }
        console.log("\nНет, правильный ответ: Ямайка");
        return true;
      },
    },
  ]);
}

second();
