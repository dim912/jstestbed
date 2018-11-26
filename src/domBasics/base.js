

//This file is sourced by base.js => so below functions get added to the window object of the browser

function onload() {
    document.getElementById('value').innerText = 0
}

function add() {
    document.getElementById('value').innerText = parseInt(document.getElementById('value').innerText) + 1
}

function substract() {
    document.getElementById('value').innerText = parseInt(document.getElementById('value').innerText) - 1
}
