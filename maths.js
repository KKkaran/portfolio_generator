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


// const racers = ["Lewis","Harvey","Mike","Scott","Harry","Russel","Miles"]
// const [f,s,t,...rest] = racers

// console.log(f,s,t,rest)

const data = [
    {
        fname : "Karan",
        lname : "sodhi",
        age : 24
    },
    {
        fname : "Tim",
        lname : "Denver",
        age : 25
    },
    {
        fname : "Harvey",
        lname : "Specter",
        age : 56
    },
    {
        fname : "Harry",
        lname : "Potter",
        age : 19
    }
]

const ff = [["sodhi","bob","sukhi"],["adarsh","minta","kulli"],["popi","dukka","sidhu"],["nagi","bunny","uncle"]]


// const newp = ff.map( ([f,s]) =>{
//     console.log(f,s)
// })

const names = ["karan","singh","sodhi","sure"]

//console.log(names + "")
//console.log(names.join("") + "")
// const newarr = data.map(({fname,lname,age}) => {
    
//     console.log(fname,lname,age)
// })

const ages = [21,58,8,16,106,83,42,55,2,0]

const g = []
ages.forEach(a => {
    if (a > 21) g.push(a)
})

console.log(g)

const newarr = ages.filter(f => f>21)
console.log(newarr)

























