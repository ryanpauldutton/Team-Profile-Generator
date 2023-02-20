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
    //Table of contents
    {
        type: 'Input',
        message: 'Table of contents?',
        name: 'TOC',

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
    fs.writeFile('/README2.md', questions, err => {
        if (err) {
            console.error(err);
        }
        // file written successfully
    });
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
