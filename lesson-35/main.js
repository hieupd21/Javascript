/*
    Math Object
        - Math.PI
        - Math.round()
        - Math.abs()
        - Math.ceil()
        - Math.floor()
        - Math.random()
        - Math.min()
        - Math.max()
*/

// Math.PI số Pi
console.log(Math.PI);

// Math.round() làm tròn số
console.log(Math.round(Math.PI));

// Math.abs() trị tuyệt đối
console.log(Math.abs(-3));

// Math.ceil() làm tròn trên
console.log(Math.ceil(3.5));

// Math.floor() làm tròn dưới
console.log(Math.floor(3.5));

// Math.random() đúng với cái tên random
var random = Math.floor(Math.random() * 5);
var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
];
console.log(bonus[random]);