// function task1(){
//   console.log('Task 1')
// }

// function task2(){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       console.log('Task 2')
//       resolve()
//     }, 2000)
//   })
// }

// function task3(){
//   console.log('Task 3')
// }

// async function executeNew() {
//   task1()
//   await task2()
//   task3()
// }

// executeNew()

const taska1 = async () => {
  console.log('Task 1 Stareted')
  await new Promise(resolve => setTimeout(resolve, 1500))
  console.log('Task 1 finished')
}

const taska2 = async () => {
  console.log('Task 2 Stareted')
  await new Promise(resolve => setTimeout(resolve, 1000))
  console.log('Task 2 finished')
}

const runTask = async () => {
  await taska1()
  await taska2()
  console.log('All tasks finished')
}

// runTask()
const fetchData = async () => {
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const data = await response.json()
    console.log("Fetched data is: ", data)
  }catch(err){
    console.log("Error fetching data: ", err)
  }
}

fetchData()