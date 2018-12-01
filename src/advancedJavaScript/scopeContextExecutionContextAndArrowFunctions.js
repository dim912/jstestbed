//There are three important terms to understand JS

/*

scope : this is the visibility of veriables created (Global Execution context is visible to everybody)
context: what does `this` keyword means. only `new` keyword makes new contexts. when a function is called, this is set to the calling obj or bind.
executionContext: what are the visible veriable scopes to current code of execution

closure : JS keep remeber lexical(where the code is declared) scopes of code blocks. (It taks a copy of veriable that it was seeing at the time of declaration)

*/


//Arrow functions can not be used as constructors

//context can not be bound on arrow functions

//MAJOR difference is 
/*
for regular functions => context (what is ment by `this') is decided at the runtime (object on which the function is called or bind)

for arrow functions => context is the lexial context ( context in which the arrow functions is defined)

*/

obj = {
    a: 'dim',
    b: () => { console.log(this) },
    c: function () { console.log(this) }
}
obj.b() //prints global. since lexical context of b is global
obj.c() //prints obj, since c is bound to obj


function Person() {
    this.fun = () => { console.log(this) }
    this.fun1 = function () { console.log(this) }

    this.fun()
    this.fun1()

    setTimeout(() => { console.log(this) }, 2000)

    setTimeout(function () { console.log(this) }, 3000)

}


Person() //This calls Person as an function so. A new scop is created. But not a new context
/*
 this.fun = () => { console.log(this) }
    this.fun1 = function () { console.log(this) }

    this.fun() //global context
    this.fun1() //global context

    setTimeout(() => { console.log(this) }, 2000) //global context

    setTimeout(function () { console.log(this) }, 3000) //global context
 */

new Person() //this calls Person as a constructor. Now a new context and a scope is created
/*
    this.fun = () => { console.log(this) } //this = person obj
    this.fun1 = function () { console.log(this) } 

    this.fun() //this refers to Person Obj
    this.fun1() // this refers to person obj

    setTimeout(() => { console.log(this) }, 2000) //this refers to person obj

    setTimeout(function () { console.log(this) }, 3000) //this refers to global
*/

