// packages and files needed for this application
const inquirer = require('inquirer');
const fs = require('fs/promises');
const generateMarkdown = require('./utils/generateMarkdown');


// Array of questions for user input
const questions = [{
  type: 'input',
  name: 'title',
  message: 'What is your project title?',
},
{
  type: 'input',
  name: 'description',
  message: 'Enter a description of your project:',
},
{
  type: 'input',
  name: 'installation',
  message: 'Enter installation instructions:',
},
{
  type: 'input',
  name: 'usage',
  message: 'Enter usage instructions:',
},
{
  type: 'input',
  name: 'links',
  message: 'Enter link to video (ex: [mylink](https://mylink.com)) or file path (ex: ![file description](./myFilePath)) :',
},
{
  type: 'input',
  name: 'credits',
  message: 'Enter a list of collaborators:',
},
{
  type: 'list',
  name: 'license',
  message: 'Choose a license for your project:',
  choices: ['Apache', 'GNU', 'MIT', 'BSD', 'Mozilla', 'None', 'Unlicense'],
},
{
  type: 'input',
  name: 'contributions',
  message: 'Enter contributions guidelines:',
},
{
  type: 'input',
  name: 'test',
  message: 'Enter test instructions:',
},
{
  type: 'input',
  name: 'gitHub',
  message: 'Enter your github username (ex: username):',
},
{
  type: 'input',
  name: 'email',
  message: 'Enter your email:',
},];


// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      const readmeContent = generateMarkdown(response)
      fs.writeFile('./README.md', readmeContent)
      console.log('Successfully created README.md!!');
    })
    .catch((err) => console.log('An error has occurred, please try again!!'));

}

// Function call to initialize app
init();
