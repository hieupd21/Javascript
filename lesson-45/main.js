/*
    Let & Const
*/

// scope

if (true) {
    var num1 = 1;
    
    let num2 = 2;
    const num3 = 3;

    console.log(num2);
    console.log(num3);
}
console.log(num1);


// hosting

var a;
a = 10;
console.log(a);


// assignment
let x = 1;
x = 2;
console.log(x);

// const x = 1;
// x = 2;
// console.log(x);

const course = {
    "name": "Javascript"
}
course.name = "PHP";
console.log(course.name);