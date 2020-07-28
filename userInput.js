const fs = require("fs");
const inquirer = require ("inquirer");
const greeting = require ("./greeting");
const PasswordPrompt = require("inquirer/lib/prompts/password");
 // // log greeting on userInput page
console.log(greeting);
inquirer
// Prompt the new user to create their new user name
  .prompt([
    {
    name: 'NiaSmith',
    message: 'What is your username?',
    },
  ])
//   Answer for the user name the new user just entered
  .then(answers => {
    console.info('Answer:', answers.NiaSmith);
  });