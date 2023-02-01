// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge = ""
  switch (license) {
    case 'Apache':
      licenseBadge = 'https://img.shields.io/badge/licence-Apache-blue'
      break;
    case 'GNU':
      licenseBadge = 'https://img.shields.io/badge/licence-GNU-blue'
      break;
    case 'MIT':      
      licenseBadge = 'https://img.shields.io/badge/licence-MIT-green'
      break;
    case 'BSD':
      licenseBadge = 'https://img.shields.io/badge/licence-BSD-green'
      break;
    case 'Mozilla':
      licenseBadge = 'https://img.shields.io/badge/licence-Mozilla-blue'
      break;
    default:"";
      break;
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
![License](https://img.shields.io/badge/licence-${data.license}-green)

  
## Description
  
${data.description}
  

## Table of Contents

  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contrubutions](#Contributions)
  - [Test](#Test)
  - [Questions](#Questions)



## Installation

${data.installation}



## Usage

${data.usage}



## License

${renderLicenseBadge()}



## Contributions

${data.contributions}



## Test

${data.test}



## Questions

github.com/${data.gitHub}  
${data.email}
`;
}

module.exports = generateMarkdown;
