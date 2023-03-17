// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
    message: "what is the Project name?",
    name:"name",
    type:"input"
},
{
    message: "what is the Project description?",
    name:"description",
    type:"input"
},
{
    message: "How do you use this project?",
    name:"instructions",
    type:"input"
},
{
    message: "Who helped create this project?",
    name:"credits",
    type:"input"
},
{
    message: "Please input your github username",
    name:"github",
    type:"input"
},
{
    message: "Please input your email",
    name:"email",
    type:"input"
},
{
    message: "Please input any licence used in the project",
    name:"licence",
    type:"list",
    choices: ["MIT", "APACHE", "None"]
},
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => { 
//fs.writeFile(FILE PATH AND NAME, DATA, EROOR HANDLING FUNCTION)
        fs.writeFile("./utils/ProjectReadme.md", generateMarkdown(answers), err=> console.log( err))
    });
}

// Function call to initialize app
init();
