/*
    For/of loop (vòng lặp for/of)
    - có thể duyệt array, string. Đối với Object phải biến đổi 1 tí
*/

// Array

var lang = [
    'JS',
    'PHP',
    'Ruby',
    'Java'
];

console.log(lang);

for (var iterator of lang) {
    console.log(iterator);
}

console.log('_______________________');

// Object
var myObject = {
    name: 'Duy Hiếu',
    age: 22
};

var arrForObject = Object.values(myObject);
console.log(arrForObject);

for (var value of arrForObject) {
    console.log(value);
}