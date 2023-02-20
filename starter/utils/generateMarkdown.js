// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.repoName}

  ## Table of contents
  - [Description]
  - [Usage]
  - [contributing]
  - [Installation]
  - [Questions]
  - [License]
  
  ## Description
  ${data.desc}
  
  ## Usage
  ${data.usage}
  
  ## Installation
  ${data.install}
  
  # License
  ${data.license}
  
  ## Contributions
  ${data.contribute}
  
  ## Tests
  ${data.tests}`

    ;
}

module.exports = generateMarkdown;
