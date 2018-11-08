//EX 1

function foo(one, two, three) {

    console.log(two)

}

var arr = [1, 2, 3]

//apply method call on any function - spread out the second argument on the called function
foo.apply(null, arr);

//same can be written shorthand
foo(...arr)


//EX2

var arr1 = [1, 2, 3, 4, 5]
var [a, b, ...theRest] = arr1 //theRest will bear the remainings in the array after first 2 elements

console.log(a) //a
console.log(b) //b
console.log(theRest) // [3,4,5]

//EX3
var arrOne = ['thing', 'otherThing']

var arrTwo = ['foo', 'bar', arrOne, 'baz']

console.log(arrTwo) //[ 'foo', 'bar', [ 'thing', 'otherThing' ], 'baz' ]

var arrThree = ['foo', 'bar', ...arrOne, 'baz']

console.log(arrThree) //[ 'foo', 'bar', 'thing', 'otherThing', 'baz' ]
