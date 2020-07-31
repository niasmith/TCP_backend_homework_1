// Node.js file system and HTTP modules required to work
const fs = require("fs");
const http = require("http");
// npm inquirer file 
const inquirer = require ("inquirer");
// connector to allow userInput to call greeting
const greeting = require ("./greeting");

// Console logged greeting from the greeting.js file 
console.log(greeting);

function userQuestion(){
    inquirer
    // Questions prompt the user for their input. 
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

     // If the password is correct or incorrect, the responses below will follow. 
    .then (function(data) {
        if (data.password != data.confirm){
            console.log("Oops,try again!");
            userQuestion();
        } else{
            var fs = require("fs");
        //Sorting users information entered into userPassword.txt
            fs.writeFile("./userPassword.txt", data.username + " : "+ data.password ,function(err){
                if (err){
                    return console.log(err);
                } else {
                    console.log("success!");
                }
            }); 
        }
    })
}

// Run userQuestion
userQuestion();