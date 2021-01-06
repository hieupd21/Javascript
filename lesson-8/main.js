/*

If-else

Trong JS có 6 giá trị sau:
    - 0
    - false
    - ''
    - undefined
    - NaN
    - null
    và khi convert sang boolean nó sẽ có giá trị false
    
*/

var name = 'Duy Hiếu';

if (name) {
    console.log('Điều kiện đúng !');
} else {
    console.log('Điều kiện sai !');
}

/* 
Cho biến number có thể là một số bất kì. Hãy kiểm tra number có phải là số chẵn hay không.
Nếu number là số chẵn, hãy gán 'even' cho biến result
Nếu number không phải số chẵn, hãy gán 'odd' cho biến result
*/

function run(number) {
    var result;
    if (number % 2 == 0) {
        result = 'even';
    } else {
        result = 'odd';
    }
    return result;
}

/*
Một website bán rượu chỉ cho phép người dùng truy cập nếu người dùng xác nhận đã đủ 16 tuổi. Developer phụ trách phát triển website đó đang không biết code như thế nào để kiểm tra được người dùng đã đủ tuổi chưa. Hãy giúp họ!
Cho trước biến age là số tuổi của người dùng truy cập website.
*/

function checkCanAccessible(age) {
    var isAccessible;
    if (age >= 16) {
        isAccessible = true;
    } else {
        isAccessible = false;
    }
    return isAccessible;
}