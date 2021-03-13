/*
    Spread
*/

// Truyền tham số array vào function
var arr = [1,2,3,4,5];
console.log(Math.max(...arr));

// Kết hợp array
var arr1 = ['Javascript', 'PHP', 'Ruby'];
var arr2 = ['Java', 'Kotlin'];
var arr3 = [...arr1, ...arr2];
console.log(arr3);