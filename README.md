# jstestbed
application to test javascript

Important

conceptually there is no similarity between java(usual OOP) and and javascript internals. Only the syntax looks alike.

#To understand javascript better know

1. javascript functions are just veriables. They are not bound to the objects where they are defined. They can be passed anywhere as usual objects.

2. The execution context of any function call is damn important ( It is not the constructor function where it is defined. and might not be the objects created from constructor function). the context of a function call more relates to the object on which the function is called, more than to the funciton.

3. The inheritance of javascript is designed by a deligation mechanisam. So, inheritance is a business of object. But not a business of constructor function. ( know prototype and '__proto__' clearly)

4. in NodeJs => every file is considered as Module and they have their own private scopes(varibale visibilities).
  a. varibels which are created without using var 'key' word is visible to the outside of the module
  b. varibels with var => is only visible inside the module
  c. variables inside blocks(like for loops ) => are visible to the outer context ( Ex : if a for(var i= 0 ; .....) is written inside a function => then i is visible to inside the function (not only inside the loop). 
