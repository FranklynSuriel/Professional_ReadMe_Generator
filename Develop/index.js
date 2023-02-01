// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs/promises');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  name: 'title',
  message: 'What is your project title?',
},
{
  type: 'input',
  name: 'description',
  message: 'Enter a description of your project?',
},
{
  type: 'input',
  name: 'installation',
  message: 'Enter instalation instructions?',
},
{
  type: 'input',
  name: 'usage',
  message: 'Enter usage instructions?',
},
{
  type: 'list',
  name: 'license',
  message: 'Choose a license for your project:/n',
  choices: ['Apache', 'GNU', 'MIT', 'BSD', 'Mozilla', 'None', 'Unlicense'],
},
{
  type: 'input',
  name: 'contributions',
  message: 'Enter contributions guidelines?',
},
{
  type: 'input',
  name: 'test',
  message: 'Enter test instructions?',
},
{
  type: 'input',
  name: 'gitHub',
  message: 'Enter your gitHub username?',
},
{
  type: 'input',
  name: 'email',
  message: 'Enter your email?',
},];


// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      const license = response.license
      const readmeContent = generateMarkdown(response)
      console.log('Successfully created README.md!!');
      fs.writeFile('../README.md', readmeContent)
    })
    .catch(err => err ? console.log(err) : console.log('Successfully created README.md!!'));

}

// Function call to initialize app
init();
