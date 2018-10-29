//javascript implements => prototyple inheritance (meaning -> deligation model)

//each object in JS can have its prototype.

var obj = {
    name: "dimuthu"
    //hidden property is added here by v8 called as => __proto__ . this is a reference to an object.
    //It is an object its own
    //and it is the prototype of the object
}

console.log(obj.__proto__)
//__proto__ can have its own __proto__. This is called as prototype chain
// Ex : window.__proto__.__proto__.__proto__.__proto__

//the obejcts in the lower end of prototype chain => inherit properties from the objects at the top of the chain

//***** IT IS SIMPLE**********/

var person = {
    firstName: 'Default',
    lastName: 'Default',
    getFullName: function () {
        return this.firstName + this.lastName
    }
}

var john = {
    firstName: 'John',
    lastName: 'Doe'
}

//dont do this in real coding. Only for demo. Dot do this EVER
john.__proto__ = person //so now is the properties are not find in john it goes to person
//insted use : Object.setPrototypeOf(obj, prototype)

console.log(john.getFullName()) //in john.getFullName this refers to john
console.log(john.firstName) //because of the prototype chain, it first looks at the prototype chain for firstName

var jane = {
    firstName: 'Jane'
}

jane.__proto__ = person

console.log(jane.getFullName()) //here firstName is taken from jane and lastName from person object.
//here this refers to jane since jane started the call


/////// ------ prototype -----------

//prototype is the object that is used to build __proto__ when you create an object with new.
// /The prototype is a property on a constructor function that sets what will become 
//the __proto__ property on the constructed object

//Only functions has prototype since, only functions can be used to create objects with new keyword(ES6 has classes which is a wrapper)

//__proto__ is everywhere even in obj and functions

//constructor function 

var parent = {
    "name": 'name'
}


function constructorFunc(name) {
    this.name = name
}
//here prototype of constructorFunc is set to parent obj. So for the new objects created using constructorFunc will have
//parent object as obj.__proto__
constructorFunc.prototype = parent

var consObj = new constructorFunc('name1')

console.log(consObj.__proto__ == parent)
console.log(consObj.__proto__ == constructorFunc.prototype)

//If the prototype of constructor function is changed later -> proto of the created object does not change
constructorFunc.prototype = {}
console.log(consObj.__proto__ == parent)
console.log(consObj.__proto__ == constructorFunc.prototype)


//Default prototype of a function pointing to the constructor function
/**
 * Arrow functions
 * a. can not be used as constructors
 * b. does not have this, arguments, supper or new.target
 * 
 * 
 */
