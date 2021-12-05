const profileDataArgs = process.argv.slice(2,process.argv.length)

const printProfileData = (profileDataArr) => profileDataArr.forEach(e => console.log(e))
  
printProfileData(profileDataArgs);

// const addThem = (a,b) => a + b //an implicit return, not using return keyword
// console.log(addThem(3,4))