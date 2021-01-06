/*
Giới thiệu 1 số hàm built-in
    1. Alert
    2. Console
    3. Confirm
    4. Prompt
    5. Set timeout
    6. Set interval
*/

// 1. Alert
alert('test xem cái alert như nào');
// Tạo ra một đoạn message có button OK

// 2. Console
console.log('Test xem cái console.log');
// Chạy lệnh trong tab console của browser

// 3. Confirm
confirm('test confirm');
// Tạo ra một đoạn message có 2 button OK và CANCEL

// 4. Prompt
prompt('Xác nhận tên của bạn');
// Tạo ra một đoạn message có ô input để nhập vào

// 5. Set timeout
setTimeout( function() {
    alert('Thông báo');
}, 1000 );
// Thực hiện 1 đoạn code trong function sau 1 khoảng thời gian ấn định, chỉ chạy 1 lần

// 6. Set interval
setInterval( function () {
    console.log('test setInterval ' + Math.random());
}, 3000 );
// Thực hiện 1 đoạn code trong function sau 1 khoảng thời gian ấn định, chỉ chạy n lần ở khoảng thời gian đang xét