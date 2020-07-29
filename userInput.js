// Node.js file system and HTTP modules required to work
const fs = require("fs");
const http = require("http");
// npm inquirer file 
const inquirer = require ("inquirer");
// connector to allow userInput to call greeting
const greeting = require ("./greeting");

// fs.readFile("userPassword.txt", "utf8", function(error, data) {

//     if (error) {
//       return console.log(error);
//     }
  
//     console.log(data);
  
//   });
  

console.log(greeting);

    inquirer
    .prompt([
        {
        type: "input",
        message: "What is your user name?",
        name: "username"
        },

        {
        type: "password",
        message: "Create your password?",
        name: "password"
        },
        {
        type: "password",
        message: "Re-enter password to confirm",
        name: "confirm"
        },
        
    ])
    .then(function(response) {

        if (response.confirm === response.password) {
        console.log("Welcome!");
        }
        else {
        console.log("Oopsy, try again!");
        }
    });