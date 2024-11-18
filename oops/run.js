import Child from "./child.js"
import Parent from "./parent.js"

const child1 = new Child("choudhari", "Pune", "Shekhar")
const child2 = new Child("abc", "london")

// const par1 = new Parent('XYZ', 'USA')

// par1.myNative()

child1.myName() // method from child class
child1.myNative()  // method from parent class

child2.myNative() // method from parent class