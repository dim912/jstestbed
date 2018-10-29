//every new file in nodejs is a new module

//GLOBAL SCOPE
// This veriable is defined in global scope(because : var keyword is not used)
withoutVar = 'WithoutVar keyword veriable'

//MODULE SCOPE
var withVarKeyWord = "WithVar keyword veriable"

function func() {

    for (var i = 0; i < 2; i++) {
        //this veriable is visible inside 'func' function everywhere
        //there is no block scope in JS/nodeJs
        var innerFuncVar = "this is a inner func veriable"
    }
    console.log(i)
    console.log(innerFuncVar)
}
func()

module.exports = () => { console.log("sopeInNode module is loaded") }
