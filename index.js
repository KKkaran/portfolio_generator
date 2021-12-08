const maths = require("./maths");
const fs = require("fs");
const inquirer = require("inquirer")
const createHtml = require("./src/page-template")
//const profileDataArgs = process.argv.slice(2,process.argv.length)

inquirer.prompt("What is your name?").then(ans=>{
    console.log("so your name is : " + ans)
})

//console.log(maths)    

//writes into the file
fs.writeFile("index.html", createHtml.generatehtml(process.argv[2],process.argv[3]), error =>{
   
    error ? console.log(error) : console.log("portfolio created now!!!")
})

//reads the file
// fs.readFile("./index.txt","utf8", (err,data)=>{
//     if (err) return err
//     console.log(data)
// })

// const printProfileData = (profileDataArr) => profileDataArr.forEach(e => console.log(e))
  
// printProfileData(profileDataArgs);

// const addThem = (a,b) => a + b //an implicit return, not using return keyword
// console.log(addThem(3,4))

