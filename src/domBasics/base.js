

//This file is sourced by base.js => so below functions get added to the window object of the browser
/**
 * When a html page is loaded to a web page
 * 
 * 1) there are two significantJS objects get created
 *      a. window object => this is the execution context on console (this object has all method ex: setTimeout())
 *      b. window.document object => this is the representation of nodes in HTML
 * 
 * 2) at the <script src="file.js" > 
 *          => browser download file.js and run it => what ever propertis/function on loaded js files get added to window object 
 * 
 */

function onload() {
    document.getElementById('value').innerText = 0
}

function add() {
    document.getElementById('value').innerText = parseInt(document.getElementById('value').innerText) + 1
}

function substract() {
    document.getElementById('value').innerText = parseInt(document.getElementById('value').innerText) - 1
}

function test() {
    document.getElementById('');
}