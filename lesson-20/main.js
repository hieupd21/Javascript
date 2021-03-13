/*
Một số điều cần biết về function
    1. Khi function đặt trùng tên
    2. Khai báo biến trong hàm
    3. Định nghĩa hàm trong hàm
*/

function run() {
    function run2() {
        console.log('Hello');
    }

    run2();
}

console.log(run());

a = 'OK JS';
b = 'JS'
console.log(a.includes(b));

/*
Viết hàm kiểm tra 1 chuỗi có nằm trong 1 chuỗi khác không.
    1. Tạo hàm stringInString có 2 tham số needle và haystack
    2. Nếu needle được tìm thấy trong haystack thì hàm trả về true
    3. Nếu không tìm thấy needle trong haystack thì hàm trả về false
    4. Nếu một trong các giá trị đầu vào không phải chuỗi hàm sẽ trả về false
*/

function stringInString(needle, haystack) {
    if(typeof needle === 'string' && typeof haystack === 'string' && haystack.includes(needle)) {
        return true;
    } else {
        return false;
    }
}