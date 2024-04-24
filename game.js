#! /usr/bin/env node
import inquirer from "inquirer";
const random_number = Math.floor(Math.random() * 6 + 1);
const guess = await inquirer.prompt([
    { message: "Guess the correct no from 1-6 :", type: "input", name: "Guess" }
]);
if (random_number == guess.Guess) {
    console.log("Congratulations! you guess the correct number");
}
else {
    console.log("wrong Answer", "\nThe correct answer is", random_number);
}
