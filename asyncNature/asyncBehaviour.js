

function task1(){
    console.log('Task 1')
}

function task2(){
    setTimeout(()=>{
        console.log('Task 2')
    }, 2000)
}

function task3(){
    console.log('Task 3')
}

// task1()
// task2()
// task3()

// callback promises and async/await

// callback  -- a function passed in another function as an argument

function greet(name, cal){
    console.log(`Hello ${name}`)
    cal()
}

function sayGoodBye(){
    console.log("Goodbye!")
}

function hi(){
    console.log("Hi!")
}

function Bye(){
    console.log("bye!")
}

//greet("shekhar", hi)
greet("abc", hi)
//greet("xyz", Bye)
