class Car{
    constructor(carName, carBrand, engine){
        this.carName = carName
        this.carBrand = carBrand
        this.engine = engine
    }

    myCar(){
        console.log(`${this.carName} is my new car of the ${this.carBrand} brand 
            and having engine ${this.engine}`)
    }

    greetMyCar(){
        console.log('Welcome new car in the family')
    }
}

let car1 = new Car('altroz', 'tata', '1200')
let car2 = new Car('sonet', 'kia', '1400')
console.log(car1, car2)

car1.greetMyCar()
car2.myCar()