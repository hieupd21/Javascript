/*
    Object Prototype (Nguyên liệu xây dựng đối tượng)
        - Sử dụng khi nào?
*/

function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.className = 'F8';

var user = new User('Hiếu', 22);

console.log(user);