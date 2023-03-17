// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT"){
    return "MIT BADGE GOES HERE"
  }
  return "![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)"

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# The name of the project is ${data.name}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  -[Instructions](#instructions)

  ## Instructions
  ${data.instructions}
#### Who made this project? ${data.credits}
#### My Github page is (https://github.com/${data.github}.com)
#### My email is: ${data.email}
##### The licences used are: ${data.licence}


`;
}


module.exports = generateMarkdown;
 