// Dependencies
const inquirer = require("inquirer");
//const jest = require("jest");
const fs = require("fs");

let teamArray = [];

// Libraries
 const Intern = require("./library/intern");
 const Engineer = require("./library/engineer");
const Manager = require("./library/manager");

function teamBuilder () {
    console.log ("teamBuilder called")
    addManager();
    //addAdditional();
    return;    
};

function addAdditional(){
    console.log("addAdditional called")
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add another team member?",
            choices: ["Engineer", "Intern", "Done"],
            name: "next"
        }
    ])

    .then(function (data) {
        switch (data.next) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            case "Done":
                makeHTML();
                break;
        }
    });
};

// Add a manager
function addManager(){
    console.log("addManager called")
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
    ])

    .then(function (data) {
        const name = data.name;
        const id = 1;
        const email = data.email;
        const officeNumber = data.officeNumber;
        const newPerson = new Manager(name, id, email, officeNumber);
        teamArray.push(newPerson);
        addAdditional();
    });
};

// Add an engineer
function addEngineer(){
    console.log("addEngineer called")
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
    ])

    .then(function (data) {
        const name = data.name;
        const id = teamArray.length + 1 ;
        const email = data.email;
        const gitHub = data.gitHub;
        const newPerson = new Engineer (name, id, email, gitHub);
        teamArray.push(newPerson);
        addAdditional();
    });
};

// Add an intern
function addIntern(){
    console.log ("addIntern called")
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
    //addAdditional();
    
};

function makeHTML(){
    console.log("makeHTML called")
};

//Start teamBuilder upon launch
teamBuilder();