//----------------EX 1-------------------------------------
//Promises helps to write async codes

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolved")
    }, 5000)
})

p.then(ans => {
    console.log("Resolution is:" + ans);
}).catch(err => { //If any error happens in p or in then clouse => catch is get called
    console.log("Error is:" + err);
})
//----------------------EX 2-----------------------------

function fun(resolve, reject) {
    setTimeout(() => { reject("rejected") }, 5000)
}

new Promise(fun).then(ans => {
    console.log(ans)
}).catch(err => {
    console.log(err)
})

console.log("End of coding");



///////////////// HOW TO RETURN A PROMISE FROM A FUNCTION ///////////////////

function calcAsync(a, b) {

    let total = a + b;

    return new Promise((resolve, reject) => {

        if (a != undefined && b != undefined) {
            resolve(total);
        }
        else {
            reject('Wrong arguments')
        }
    });
}

//so the callers of my function can write async style codes
calcAsync(1, 2)
    .then(ans => {
        console.log('sum is :' + ans);
    })
    .catch(err => {
        console.log('Error is :' + err)
    })