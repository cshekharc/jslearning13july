// let a = [10, 30 ,20, 40]
// console.log(a)
// console.log(typeof a)

// push()

// let fruits = ["apple", "banana"]
// console.log(fruits.length)
// fruits.push("orange")
// console.log(fruits)
// console.log(fruits.length)

// // pop()

// fruits.pop()
// console.log(fruits)
// console.log(fruits.length)

// let ab = []
// console.log(ab.pop())
// // console.log(ab)

// // shift and unshift 

// fruits.unshift("dragonFruit")
// console.log(fruits)
// console.log(fruits.length)

// fruits.shift()
// console.log(fruits)
// console.log(fruits.length)


// map(), filter(), reduce(), some(), every(), find(), forEach()


//map()
// let a = [1, 2, 4, 5]
// let b = a.map(num => num*num)
// console.log(b)

// const itemPrice = [5, 10, 15, 20]
// const exchangeRate = 0.75

// const discPrice = itemPrice.map(price => price*exchangeRate)  // price - each element from the itemPrice array
// console.log(discPrice)

// // filter()

// let number = [2, 3, 6, 7, 10, 15, 13]
// let filteredNums = number.filter(num => num % 2 == 0)
// console.log(filteredNums)

// const users = [
//     {name: "shekhar1", age: 20},
//     {name: "shekhar2", age:25},
//     {name: "shekhar3", age:32},
//     {name: "shekhar", age: 38}
// ]

// const thirtyPlus = users.filter(user => user.age >= 60)

// console.log(thirtyPlus)

// reduce 

const cart = [
    {item: "bag", price: 20},
    {item: "fruits", price: 15},
    {item: "xyz", price: 30},
    {item: "abc", price: 10},
]

// let totalPr = 0

// for(let i = 0; i < items.length; i++){
//     totalPr = +item.price
// }

const totalPrice = cart.reduce((total, item)=> total + item.price, 0)
console.log(totalPrice)