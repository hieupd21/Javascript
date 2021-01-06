/*
    Do/While loop (vòng lặp do/while)
    - vòng lặp này luôn chạy 1 lần rồi mới kiếm tra điều kiện
*/

// Ví dụ nạp thẻ
var i = 0;
var isSuccess = false;

do {
    i++;
    console.log('Nạp thẻ lần ' + i);

    // Trường hợp thành công
    if (false) {
       isSuccess = true; 
    }
} while (!isSuccess && i <= 3);