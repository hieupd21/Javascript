/*
    Object Constructor (Bảng thiết kế của đối tượng)
*/

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('Duy', 'Hiếu', 'Avatar');
var student = new User('Ngọc', 'Hiếu', 'TinoHi');

// Tạo thêm thuộc tính cho object
author.title = 'add title property';

console.log(author);
console.log(student.getName());

User.prototype.className = '16CNTT1';

