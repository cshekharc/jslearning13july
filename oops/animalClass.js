class Animal{
    constructor(name){
        this.name = name
    }

    eat(){
        console.log(`${this.name} eats.`) // tom1 eats
    }
}

class Dog extends Animal{
    constructor(name, color){
        super(name)
        this.color = color
    }

    eat(){
        super.eat() // tom2 eats
        console.log(`${this.name} eats biscuits.`) // tom2 eats biscuits
    }

    speak(){
        console.log(`${this.name} barks and having ${this.color} color`) // tom2 barks and having black color
    }
}

const dog1 = new Animal("Tom1")
dog1.eat() // tom1 eats

const dog2 = new Dog("Tom2", "black")
dog2.speak() // tom2 barks and having black color
dog2.eat() // tom2 eat biscuits