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
        templateArray.push(newPerson);
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
            name: "gitHub"
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
    ])
    .then(function (data) {
        const name = data.name;
        const id = teamArray.length + 1 ;
        const email = data.email;
        const school = data.school;
        const newPerson = new Intern (name, id, email, school);
        teamArray.push(newPerson);
        addAdditional();
    });
    
};

function makeHTML () {
    console.log("Thank you for using Team Generator! Your HTML document is being written now...")
    
    //Variable to hold completed HTML template
        const templateArray = []
    //headerHTML
        const headHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
        <style></style>
    </head>
    <body>
        <header>
            <h1>Team Profile</h1>
        </header>
        <main>
        `
    //Push headerHTML to template
        templateArray.push(headHTML);
    //mainHTML
        for (let i = 1; i < templateArray.length; i++) {
            let mainHTML = `
            <div class="team-card">
                <div class="card-upper">
                    <h2>${teamArray[i].name}</h2>
                    <h3>${teamArray[i].title}</h3>
                </div>
                <div class="card-lower">
                    <ul>
                        <li>
                            Employee ID:${templateArray[i].id}
                        </li>
                        <li>
                            Email: <a href="mailto:${templateArray[i].email}">${templateArray[i].email}</a>
                        </li>
            `
            //For Managers show Office Number
            if (templateArray[i].officeNumber) {
                mainHTML += `
                        <li>
                            Office #: ${templateArray[i].officeNumber}
                        </li>
                `
            //For Engineers show GitHub
            } else if (teamArray[i].gitHub) {
                mainHTML += `
                        <li>
                            GitHub: <a href="https://github.com/${templateArray[i].github}">${templateArray[i].gitHub}</a>
                        </li>
                `
            //For Interns show School
            } else if (templateArray[i].school) {
                mainHTMLt += `
                        <li>
                            School: ${templateArray[i].school}
                        </li>
                `
            }

            mainHTML += `
                </div>
            </div>
        </main>
        `
        };
    //Push mainHTML to template
        templateArray.push(mainHTML);
    //footerHTML
    const footerHTML = `
        <footer>
        </footer>
    </body>
    </html>    
    `
    //Push HTML Body to HTML template variable
    templateArray.push(footerHTML);
};



//Start teamBuilder upon launch
teamBuilder();