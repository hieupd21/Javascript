/*
    Arrow function
*/

var sum = function(a, b) {
    return a + b;
}

var sum = (a, b) => a + b;


var num = (x, y) => {
    return {
        x: x,
        y: y
    }
}

var num = (x, y) => ({x: x, y: y});

console.log(num(1, 2));