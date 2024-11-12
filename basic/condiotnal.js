let age = 18

if (age > 18){
    console.log("person is elegible to vote")
}else if(age === 18){
    console.log('person is newly elegible for voting')
}else{
    console.log('person is not elegible for voting')
}

// switch statements
let num = 5

switch(num){
    case 1:
        console.log("this is case 1")
        break
    case 2:
        console.log("this is case 2")
        break
    case 10:
        console.log("this is case 10")
        break
    default:
        console.log("out of case")
}

// == and ===

// let a = 5
// let b = '5'

// console.log(a == b) // true
// console.log(a === b) // false