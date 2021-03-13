/*
    Enhanced object literals
*/

/*
    1. Định nghĩa key: value cho object
    2. Định nghĩa method object
    3. Đinh nghĩa key cho object dưới dạng biến
*/

var fullname = "Phan Duy Hiếu";
var age = 23;

var course = {
    fullname,
    age,
    getName() {
        return fullname;
    }
};

console.log(course);

// 3

var n = "name";
var age = 23;

var student = {
    [`student ${n}`]: "Phan Duy Hiếu",
    age
}

console.log(student);