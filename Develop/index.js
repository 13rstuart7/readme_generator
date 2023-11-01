// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"what is the title of your project",
        name:"title"
    },
    {
        type:"input",
        message:"what is the discription of your project",
        name:"discription"
    },
    {
        type:"input",
        message:"what is the installation of your project",
        name:"installation"
    },
    {
        type:"input",
        message:"what is the usage of your project",
        name:"usage"
    },
    {
        type:"input",
        message:"what is the contribution of your project",
        name:"contribution"
    },
    {
        type:"input",
        message:"what is the test of your project",
        name:"test"
    },
    {
        type:"input",
        message:"what is the license of your project",
        name:"license"
    },
    {
        type:"input",
        message:"enter your email",
        name:"email"
    },
    {
        type:"input",
        message:"what is your github username",
        name:"github"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then(answers=>{
    fs.writeFileSync("readmeExample.md",`
# ${answers.title}

## Discription
    ${answers.discription}

## Installation
    ${answers.installation}
    
## Usage
    ${answers.usage}

## Contribution
    ${answers.contribution}

## Test
    ${answers.test}

## License
    ${answers.license}

## Questions
  if you have any questions, fill free to email me at  ${answers.email}
  https://github.com/${answers.github}
    `)
})
}

// Function call to initialize app
init();
