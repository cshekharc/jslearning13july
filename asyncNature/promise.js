// function task1(){
//     console.log('Task 1')
// }

// function task2(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('Task 2')
//             resolve()
//         }, 2000)
//     })
// }

// function task3(){
//     console.log('Task 3')
// }

// function add(a,b){
//     return a+b
// }

// console.log(add(2,3))

// task1()
// task2().then(()=>{
//     task3()
// })

// task1().then(()=>{
//     task2()
// }).then(()=>{
//     task3()
// })


// Promise  example
// states - pending, fullfilled - resolve callback for this, rejected - reject callback for this
let pro = new Promise((resolve, reject)=>{
    let isFoodReady = false
    setTimeout(()=>{
        if(isFoodReady){
            resolve('Food is ready')
        }else{
            reject('Food prep failed')
        }
    }, 2000)
})

pro.then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
})
