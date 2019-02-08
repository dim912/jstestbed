
//Object factory
const peopleFactory = function (name, age, state) {

    const temp = {}
    temp.age = age
    temp.name = name
    temp.state = state

    temp.printPerson = function () {
        console.log(this.name + "," + this.age + "," + this.state)
    }
    return temp

}

const person1 = peopleFactory("john", 23, "Califonia");
const person2 = peopleFactory("Kim", 27, "SC")

person1.printPerson()
person2.printPerson()


//-----------Constructore pattterns

var peopleConstructor = function (name, age, state) {

    this.name = name
    this.age = age
    this.state = state

    //The problem here is every object created from peopleConstructor function has its own printPerson function which is redundent
    this.printPerson = function () {
        console.log(this.name + "," + this.age + "," + this.state)
    }
    //return null This is wrong. constructor functions should not return null. But it can return something else
}

const person3 = new peopleConstructor("john", 23, "Califonia");
const person4 = new peopleConstructor("Kim", 27, "SC")

person3.printPerson()
person4.printPerson()
//The problem here is every object created from peopleConstructor function has its own printPerson function which is redundent


//To solve the above problem => prototypyes are used
// then we use the shared area => which is called as prototype
const peopleProto = function () {

}
//prototype is the shared attributes by each object created from peopleProto constructor
peopleProto.prototype.age = 0
peopleProto.prototype.name = 'no name'
peopleProto.prototype.state = 'no city'
peopleProto.prototype.printPerson = function () { console.log(this.age + ',' + this.name + ',' + this.state) } //arrow function does not work here. beause its lexial binding

const person5 = new peopleProto("john", 23, "Califonia");
const person6 = new peopleProto("Kim", 27, "SC")

person5.printPerson()
person6.printPerson()

console.log('name' in person1) //true
console.log(person5.hasOwnProperty('name'))



//dynamic prototype pattern (this is the best for most of situations)
const peopleDynamicProto = function () {

    this.age = 0
    this.name = 'no name'
    this.state = 'no city'

    //when first object of peopleDynamicProto is created . so multiples are not get created
    if (typeof this.printPerson !== 'function') {
        peopleDynamicProto.prototype.printPerson = function () { console.log(this.age + ',' + this.name + ',' + this.state) } //arrow function does not work here. beause its lexial binding
    }

}

const person51 = new peopleDynamicProto("john", 23, "Califonia");
const person61 = new peopleDynamicProto("Kim", 27, "SC")

person51.printPerson()
person61.printPerson()

console.log('name' in person51) //true
console.log(person51.hasOwnProperty('name'))




