/*
    For/in loop (vòng lặp for/in)
    - có thể duyệt object, array và string
*/

var myInfo = {
    name: 'Duy Hiếu',
    age: 22,
    address: 'Đà Nẵng'
};

for (var key in myInfo) {
    console.log(myInfo[key]);
}

console.log('_______________________');

var lang = [
    'JS',
    'PHP',
    'Ruby'
];

for (var key in lang) {
    console.log(lang[key]);
}

console.log('_______________________');

var myString = 'Javascript';

for (var key in myString) {
    console.log(myString[key]);
}