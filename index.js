const maths = require("./maths");
const fs = require("fs");
const createHtml = require("./src/page-template")
const profileDataArgs = process.argv.slice(2,process.argv.length)




//console.log(maths)    

//writes into the file
// fs.writeFile("index.html", createHtml.generatehtml(profileDataArgs[0],profileDataArgs[1]), error =>{
//     if (error) throw error
// })
//     console.log("Portfolio created sucksexfully!!")
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

