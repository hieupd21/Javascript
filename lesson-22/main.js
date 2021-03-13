/*
    Object
*/

// Tạo 1 key từ bên ngoài
var emailKey = 'email';

var myInfo = {
    name: 'Duy Hieu',
    age: 18,
    address: 'Da Nang, VN',
    [emailKey]: 'hieuphan2019@gmail.com',
    getName: function () {
        return this.name;
    },
    getAge: function () {
        return false;
    },
    'job': 'Front-end'
};

myInfo['exp'] = '3 years';

// Xóa key trong Object
delete myInfo.age;

console.log(myInfo.getName());

console.log(myInfo);
