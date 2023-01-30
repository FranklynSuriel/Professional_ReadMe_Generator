// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache':
      https://img.shields.io/badge/licence-Apache-blue
      break;
    case 'GNU':
      https://img.shields.io/badge/licence-GNU-blue
      break;
    case 'MIT':
      https://img.shields.io/badge/licence-MIT-green
      break;
    case 'BSD':
      https://img.shields.io/badge/licence-BSD-green
      break;
    case 'Mozilla':
      https://img.shields.io/badge/licence-Mozilla-blue
      break;
    default:"";
      break;
  }
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
  ## Description
  ${data.description}
  ## Installation
  ${data.Installation}
  ## Usage
  ${data.usage}
  ## License 
  ${renderLicenseBadge(data.license)}
  ## Contributions
  ${data.contributions}
  ## Test
  ${data.test}
  ## Questions
  ${data.gitHub}  
  ${data.email}
`;
}

module.exports = generateMarkdown;
