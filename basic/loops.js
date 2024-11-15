// loops - do while, while, for, for .. of, for ..in and forEach

// do while

// let i = 1 
// do{
//     console.log(i)
//     i++
// }while(i <= 5)

// while

// let i = 1
// while(i >= 5){
//     console.log(i)
//     i++
// }

// for(let i = 1; i<=5; i++){
//     console.log(i)
// }

// for(let i = 0; i <=5; i++){
//     console.log(`${i} x ${i}: ${i * i}`)
// }

// let nums = [1, 2, 3, 4, 5, 10, 20] 
// let sum = 0
// for(let i =0; i< nums.length; i++){
//     sum = sum + nums[i]
// }
// console.log(sum)

// const countries = ['India', 'Canada', 'France', 'Denmark', 'United States', 'Norway']
// const newCountries = []
// for(let i = 0; i < countries.length; i++){
//     newCountries.push(countries[i].toUpperCase())
// }
// console.log(newCountries)

// // for..of loop can be used for the arrays
// const newCountries1 = []
// for(const country of countries){   // country is similar to countries[i]
//     newCountries1.push(country.toUpperCase())
// }

// console.log(newCountries)

// let num = [10, 20, 30, 40, 50, 60]
// let newNum = []
// for(let number of num){
//     newNum.push(number *2)
// }

// console.log(newNum)

// const greet = ['Hello']
// for(let gr of greet){
//     console.log(`${gr}`)
// }
// const greet = 'Hello'
// greet.forEach((a, b){
//     console.log(`${a} at index ${b}`)
// })

// for...in -- can be used with objects

// let person = {
//     name: 'John',
//     age : 25,
//     city: "London"
// }

// for(let per in person){
//     // console.log(`${per}: ${person[per]}`)
//     console.log(`${per}`)
// }

const colours = "yellow" //["red", "yellow", "green", "blue"]

colours.forEach((colour, index) => {
    console.log(`colour at index ${index} is ${colour}`)
})

// const users = [
//     {name: "abc", age: 20},
//     {name: "cde", age:24},
//     {name: "xyz", age:50},
// ]

// users.forEach((user)=>{
//     console.log(`${user.name} is ${user.age} years old`)
// })