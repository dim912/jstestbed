var supportt = require('./moduleLoading2.js')

/*
in nodeJS every new file is considered as a new moudle(There are no concept as modules in browsers)

the loaded module is executed from top to bottom only one time per application.

even through the module is loaded by require() multiple times

veriables inside a module is local to the module.

If any veriable is to be exposed to others -> then it should be assigned into module.exports



*/
