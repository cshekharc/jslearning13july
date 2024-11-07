// var // let // const
// 1. reassigment and redeclaration
// 2. scope - functional and scope level
// 3. hoisting - js variables and function will be at the begining of the js execution irrespective their
// squence of delcaration


// js is dynamically typed lang

console.log(s)
s = 'shekhar'


// console.log(typeof s)

// var s = 'xyz'
// console.log(s)

// var s = 30 // reassiment
// console.log(s) // 30
// {
//     var s = false
//     console.log(s) // false
// }
// console.log(s) // false
// {
//     var s = 20
// }
// console.log(s) // 20
 
// console.log(a)
// var a = 10
// console.log(a)
// a = 40
// console.log(a)
// a = 'somestring'
// console.log(a)

let b = 10
console.log(b) // 10
b = 50 // reassigment -- possible using let keyword
console.log(b)
// // let b = 'str' // redeclration is not possible with let keyword
// {
//     let b = 'newStr'
//     console.log(b) // newStr   // block - scope level is very well defined not overriding the variable
// }
// console.log(b) // 10

// console.log(d)
// let d = 20  // hoisiting is not possible with let

// const

// const ab = 20
// console.log(ab) // 20
// // ab = 30 // reassignment -- not possible with const
// console.log(ab)
// // const ab = 10 // can not redeclare the varible
// {
//     const ab = 'str1'
//     console.log(ab) // str1 // block - scope level is very well defined not overriding the variable
// }
// console.log(ab) // 20

// console.log(f)
// const f = 20  // hoisiting is not possible with const



