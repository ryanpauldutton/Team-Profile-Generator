const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    // Title of project
    {
        type: 'Input',
        message: 'what is your GitHub repo name?',
        name: 'repoName',
    },
    //Description
    {
        type: 'Input',
        message: 'what is your GitHub repo description?',
        name: 'desc',
    },
    //Installation
    {
        type: 'Input',
        message: 'What is the method of installation?',
        name: 'install',

    },
    //Usage 
    {
        type: 'Input',
        message: 'What is the usage of the repo?',
        name: 'usage',

    },
    //License 
    {
        type: 'Input',
        message: 'What license is used?',
        name: 'license',

    },
    //Contributing 
    {
        type: 'Input',
        message: 'How would developers contribute?',
        name: 'contribute',

    },
    //Tests
    {
        type: 'Input',
        message: 'What tests can be used?',
        name: 'tests',

    },
    //Questions
];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err){
console.log(fileName)
console.log(data)
if (err){
    return console.log(err)
 } else {
    console.log('file correct!')
 }

});
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(data => {
            writeToFile("ReadMe2.md", generateMarkdown(data));
        })
        .catch((err) => {
            console.log(err);
        })
}

// function call to initialize program
init();
