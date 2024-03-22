#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\m\tWellcome to \'codewithiqra\' -IQ Simple Calculateor\n");

const answer = await inquirer.prompt([
  { message: "enter frist number", type: "number", name: "fistNumber" },
  { message: "enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
if (answer.operator === "Addition") {
  console.log(answer.fistNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.fistNumber - answer.secondNumber);

} else if (answer.operator === "Multiplication") {
  console.log(answer.fistNumber * answer.secondNumber);

} else if (answer.operator === "Division") {
  console.log(answer.fistNumber / answer.secondNumber);
  
} else{console.log("please select valid opreator");}

