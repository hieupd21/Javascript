/*

Kiểu dữ liệu trong JS

1. Dữ liệu nguyên thủy
    - Number
    - String
    - Boolean
    - Undefined
    - Null
    - Symbol

2. Dữ liệu phức tạp
    - Function
    - Object

*/

// Number
var a = 1;
console.log(a + ' là kiểu dữ liệu ' + typeof a);

// String
var name = "Hiếu's story";
console.log(name + ' là kiểu dữ liệu ' + typeof name);

// Boolean
var isSuccess = true;
console.log(isSuccess + ' là kiểu dữ liệu ' + typeof isSuccess);

// Undefined
var age;
console.log(age + ' là do không gán giá trị và kiểu dữ liệu ' + typeof age);

// Null
var isNull = null;
console.log(isNull + ' là kiểu dữ liệu ' + typeof isNull);

// Symbol
var id = Symbol('id'); // unique
console.log(typeof id);

// function
var myFunc = function () { 
    alert('Function');
};
console.log(typeof myFunc);

// Object
var myObject = {
    name: 'Hiếu',
    age: 22,
    address: 'Đà Nẵng'
};
console.log(typeof myObject);

// Array
var myArr = [
    'JS', 'HTML', 'CSS'
];
console.log(typeof myArr);

/*
Tạo biến age lưu số tuổi bất kì
Tạo biến pi để lưu số PI (làm tròn tới 2 số thập phân)
Tạo biến bonusPoint gán giá trị là số điểm bạn sẽ đạt được nếu vượt qua toàn bộ test case của bài tập này
*/
var age = 22;
var pi = Number((Math.PI).toFixed(2));
var bonusPoint = 69;
console.log(pi);

/*
Tạo biến fullName và gán tên bất kì.
Tạo biến myGirlFriendName và gán tên gấu của bạn. Nếu không có gấu thì gán chuỗi gì cũng được.
Tạo biến currentLanguage và gán giá trị là tên ngôn ngữ lập trình bạn đang học tại khóa học này.
*/
var fullName = 'Duy Hiếu';
var myGirlFriendName = 'N';
var currentLanguage = 'JS';

// Kiểm tra biến input có phải là chuỗi hay không. Là chuỗi gán true cho output, không phải là chuỗi gán false cho output.
function run(input) {
    var output;

    if (typeof input == 'string') {
        output = true;
    } else {
        output = false;
    }

    return output;
}