// constructor

function Employee(name, age, dept){
    this.name = name
    this.age = age
    this.dept = dept

    this.newEmp = function(){
        console.log(`${this.name} is having age ${this.age} and is from dept ${this.dept}`)
    }
}

let emp1 = new Employee("shekhar", "40", "support")
let emp2 = new Employee("abc", "20", "IT")
let emp3 = new Employee("xyz", "30", "sales")

console.log(emp1)
console.log(emp2)
console.log(emp3)
emp1.newEmp()

function Circle(radius){
    this.radius = radius

    this.getCircle = function(){
        console.log(`${this.radius} is the radius of circle`)
    }
}

let circle1 = new Circle(5)
console.log(circle1)
circle1.getCircle()

// let ab = {
//     name : "xyz",
//     fun : function(){
//         console.log('abc')
//     }
// }

// // console.log(ab.fun())
// ab.fun()