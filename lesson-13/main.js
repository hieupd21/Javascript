/*
Chuỗi trong JS

1. Tạo chuỗi
    - Các cách tạo chuỗi
    - Nên dùng cách nào? Lý do?
    - Kiểm tra datatype
2. Một số case sử dụng backslash (\)
3. Xem độ dài chuỗi
4. Chú ý độ dài khi viết Code
5. Template string ES6

*/

// Cách 1 -> nên dùng cách này
var name1 = "Duy Hiếu là 'số 1'";
console.log(name1);
console.log(name1.length); // xem độ dài chuỗi

// Cách 2
var name2 = new String('Duy Hiếu');
/* 
Tại sao không nên dùng cách này?
Bởi vì tạo bằng từ khóa (new) thì chuỗi sẽ được định nghĩa là 1 object.
*/

// Template string
var firstName = 'Duy';
var lastName = 'Hiếu';

console.log(`Tôi là: ${firstName} ${lastName}`);