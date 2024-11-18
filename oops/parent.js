class Parent{
    constructor(lastName, native){
        this.lastName = lastName
        this.native = native
    }

    myNative(){
        console.log(`${this.lastName} are having a native ${this.native}`)
    }
}

export default Parent