/*
    Destructuring
*/

// Array
var arr = [1, 2, 3, 4];
const [a, b, ...rest] = arr;

console.log('a :', a);
console.log('b :', b);
console.log('rest :', rest);

// Object
var course = {
    name: 'Javascript',
    price: 1000,
    description: 'Learn JS 100%'
};

const course1 = {
    ...course,
    name: 'ReactJS',
    progress: 30
};

console.log('course', course);
console.log('course1', course1);