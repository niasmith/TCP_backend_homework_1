const fs = require("fs");
const inquirer = require ("inquirer");
const greeting = require ("./greeting");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username"
    },
    {
      type: "password",
      message: "What is your password?",
      name: "password"
    },
    {
      type: "password",
      message: "Re-enter password to confirm:",
      name: "confirm"
    }
  ])
  .then(function(response) {

    if (response.confirm === response.password) {
      console.log("Welcome!");
    }
    else {
      console.log("Oopsy, try again!");
    }
  });
