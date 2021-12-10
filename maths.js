// //there are methods that can be exported to another js file
// const add = (a,b) => a + b;
// const subtract = (a,b) => a - b;
// const multiply = (a,b) => a * b;
// const divide = (a,b) => a / b;

// module.exports = {
//     add : add,
//     sub : subtract,
//     times : multiply,
//     divide: divide
// }


const racers = ["Lewis","Harvey","Mike","Scott","Harry","Russel","Miles"]
const [f,s,t,...rest] = racers

console.log(f,s,t,rest)