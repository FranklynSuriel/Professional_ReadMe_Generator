// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
![License](https://img.shields.io/badge/license-${data.license}-green)
  
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

${data.links}

## Credits

${data.credits}

## License

This project is licensed under the ${data.license} license.

## Contributing

${data.contributions}

## Test

${data.test}

## Questions

[github.com/${data.gitHub}](https://github.com/${data.gitHub})

Questions about this proyect or to report an issue can be sent to:
${data.email}. Please especify the name of the proyect in the subject of the email.

`;
}

module.exports = generateMarkdown;
