var inquirer = require("inquirer");
const cp = require("child_process");

function displayDetails() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "Selection",
        choices: ["About", "Skills", "Projects", "Academics"],
      },
    ])
    .then((choices) => {
      if (choices.Selection == "About") {
        console.log(`A passionately curious Web developer 
              who just found out that making websites and seeing 
              the magic happen on the Internet is what excites him the most.`);
        displayNext();
      } else if (choices.Selection == "Skills") {
        console.log("JavaScript , Node , React , GoLang , Java ");
        displayNext();
      } else if (choices.Selection == "Projects") {
        cp.execSync("start chrome https://github.com/mrinal1224");
        displayNext();
      } else if (choices.Selection == "Academics") {
        cp.execSync(
          "start chrome https://drive.google.com/file/d/1bzd0XYUbixiMsjIfdPcteskDValQxszU/view?usp=sharing"
        );
        displayNext();
      }
    });
}

displayDetails();

function displayNext() {
  inquirer
    .prompt([{ type: "list", name: "GoBack", choices: ["back"] }])
    .then((choice) => {
      if ((choice.GoBack = "back")) {
        displayDetails();
      }
    });
}
