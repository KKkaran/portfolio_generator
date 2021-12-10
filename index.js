 
// const maths = require("./maths");
const fs = require("fs");
const inquirer = require("inquirer")
// const moment = require("moment")
const generatePage = require("./src/page-template")
//const profileDataArgs = process.argv.slice(2,process.argv.length)
//console.log(maths)    
//writes into the file
// fs.writeFile("index.html", createHtml.generatehtml(process.argv[2],process.argv[3]), error =>{
   
//     error ? console.log(error) : console.log("portfolio created now!!!\n" + moment().format("MM do YYYY"))
// })

//reads the file
// fs.readFile("./index.txt","utf8", (err,data)=>{
//     if (err) return err
//     console.log(data)
// })

// const printProfileData = (profileDataArr) => profileDataArr.forEach(e => console.log(e))
  
// printProfileData(profileDataArgs);

// const addThem = (a,b) => a + b //an implicit return, not using return keyword
// console.log(addThem(3,4))

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username'
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:'
      }
    ]);
};
const promptProject = portfolioData => {
  
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  console.log(`
  =================
  Add a New Project
  =================
  `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)'
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)'
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};
promptUser()
  .then(promptProject)
  .then(portfolioData => {
    // will be uncommented in lesson 4
    const pageHTML = generatePage(portfolioData);
    fs.writeFile('./index.html', pageHTML, err => {
      if (err) throw new Error(err);
      console.log('Page created! Check out index.html in this directory to see it!');
    });
  });
