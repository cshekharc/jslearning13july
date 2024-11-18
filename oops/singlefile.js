class Animal{
    constructor(species){
        this.species = species
    }

    speak(){
        console.log(`${this.species} makes a noise`)
    }
}

class Dog extends Animal{
    speak(){
        console.log(`${this.species} barks`)
    }
}

const dog = new Dog("Buddy")
dog.speak()