class car {
    constructor(model, colour, features) {
        this.model = model
        this.colour = colour
        this.features = features
    }
    details() {
        console.log(`model of the car is ${this.model}and colour of the car is${this.colour} features of the car are${this.features}`)
    }
    static start() {
        console.log("Car is started vroom vroom tututu")
    }
    stop() {
        console.log("Car is stopped scrrrrr !!")
    }

}
//parent class new keyword should be used for object


    


audi = new car("RB", "white")
car.start()//using start method without an object with the help of static keyboard

//child class (extend vers of parent class)
class BMW extends car {
    start() {
        console.log("Your BMVV car has been started")
    }
    stop() {
        console.log("Your BMVV car is flying in a cliff")
    }
}
//creating an object of bmw class
x5 = new BMW("M5", "blue")
x5.details()
x5.start()
x5.stop()
