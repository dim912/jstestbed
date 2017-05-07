//Simple Use case

//class definition
function PrintStuff(myDocuments) {
    this.documents = myDocuments;
}
//adding prototype methods
PrintStuff.prototype.print = function () {
    console.log(this.documents);
}
//creating objects
var newObj = new PrintStuff("I am a new Object and I can print.");
newObj.print();

//From where prototype comes from
//------------------------------------

var Account = function () { }
var p = new Object() //then prototype of p is Object.prototype
var p = {} // prototyp of p is Object.prototype
var p = new Account() //prototype of p is Account.prototype

//use prototype for inheritance

function Plant() {
    this.country = "Mexico";
    this.isOrganic = true;
}
Plant.prototype.showNameAndColor = function () {
    console.log("I am a " + this.name + " and my color is " + this.color);
}
Plant.prototype.amIOrganic = function () {
    if (this.isOrganic) {
        console.log("I am organic, Baby!")
    }
}
function Fruit(fruitName, fruitColor) {
    this.name = fruitName;
    this.color = fruitColor;
}
Fruit.prototype = new Plant() //set the prototype of Fruit class to constructor of Plant class. Hence, Fruit class inherites Plant class propritery methods
Fruit.prototype.eat = function () { console.log("eating fruit") }

var aBanana = new Fruit("Banana", "Yellow")
console.log(aBanana.name)
aBanana.showNameAndColor() //calling the inherited method. js engine search the method/property through the prototype chain upwards
aBanana.eat()
//order 
//first search the function on object -> if not found seach on objects prototype -> if not find in its prototype objects prototype.....etc
//if the property is not found in prototype chain => return undefined
//all object inherits from Object.prototype
//=> Inherited properties are
//constructor, hasOwnProperty(), isPrototypeOf(), propertyIsEnumerable(), toLocaeString(), toString(), valueOf()

//EX : Prototype chain search hierarchy(object-> then class -> then class prototype -> then prototype objects class -> then its prototype ..etc)

function People() {
    this.superstar = "Michael Jackson"
}
// Define "athlete" property on the People prototype so that "athlete" is accessible by all objects that use the People () constructor.
People.prototype.athlete = "Tiger Woods";
var famousPerson = new People();
famousPerson.superstar = "Steve Jobs";

// The search for superstar will first look for the superstar property on the famousPerson object, and since we defined it there, that is the property that will be used. Because we have overwritten the famousPerson’s superstar property with one directly on the famousPerson object, the search will NOT proceed up the prototype chain.
console.log(famousPerson.superstar); // Steve Jobs​

// Note that in ECMAScript 5 you can set a property to read only, and in that case you cannot overwrite it as we just did.

// This will show the property from the famousPerson prototype (People.prototype), since the athlete property was not defined on the famousPerson object itself.
console.log(famousPerson.athlete); // Tiger Woods​

// In this example, the search proceeds up the prototype chain and find the toString method on Object.prototype, from which the Fruit object inherited—all objects ultimately inherits from Object.prototype as we have noted before.
console.log(famousPerson.toString()); // [object Object]


//build in (Array(), Number(), String(), etc.) 
//were created from the Object constructor, and as such their prototype is Object.prototype.



