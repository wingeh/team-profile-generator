// Dependencies
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");

// Libraries
const Intern = require("./library/intern");
const Engineer = require("./library/engineer");
const Manager = require("./library/manager");

function teamBuilder () {
    addManager();
    addAdditional();
    return;    
};

function addAdditional(){
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add another team member?",
            choices: ["Engineer", "Intern", "Done"]
        }
    ]);

    //If
    addEngineer();
    //Elseif
    addIntern();
    //Else
    //End and make HTML
    return;
};

// Add a manager
function addManager(){
    inquirer.prompt([
        {
            message: "What is the team manager's name?",
            name: "name"
        },
        {
            message: "What is the team manager's email address?",
            name: "email"
        },
        {
            message: "What is the team manager's office number?",
            name: "office"
        },
    ]);
    return;
};

// Add an engineer
function addEngineer(){
    inquirer.prompt([
        {
            message: "What is the engineer's name?",
            name: "name"
        },
        {
            message: "What is the engineer's email address?",
            name: "email"
        },
        {
            message: "What is the engineers GitHub username?",
            name: "github"
        },
    ]);
    addAdditional();
    return;
};

// Add an intern
function addIntern(){
    inquirer.prompt([
        {
            message: "What is the inern's name?",
            name: "name"
        },
        {
            message: "What is the intern's email address?",
            name: "email"
        },
        {
            message: "What is the intern's school of record?",
            name: "school"
        },
    ]);
    addAdditional();
    return;
};

//Start teamBuilder upon launch
teamBuilder();