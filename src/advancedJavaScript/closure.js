function getFunctions(domain) { //domain is passed to outer function
    return {
        cook: function () { //cook is declared in scope of getFunctions
            console.log(JSON.stringify(domain) + " cooking") //domain is asinged to this function at the declare time(when getFunction funs)
        },
        clean: function () {
            console.log(JSON.stringify(domain) + " cleaning")
        }
    }
}

//---SET 1
let domain = { country: 'SG' }
let domainFuncs = getFunctions(domain)
domainFuncs.cook() //Print SG
domainFuncs.clean() //Print SG

//SET2
let domain2 = { country: 'SL' }
let domainFuncs2 = getFunctions(domain2)
domainFuncs2.cook() //print SL
domainFuncs2.clean() //print SL



