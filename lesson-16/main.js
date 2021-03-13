/*
Mảng trong JS - Array
    Truy xuất mảng
        - Độ dài mảng
        - Lấy phần tử theo index
    # Array có thể chứa tất cả các kiểu dữ liệu

*/

// Cách 1

var lang = ['JS', 'PHP', 'Ruby', 'Java', 'Python'];
console.log(lang);

// Cách 2

var arr2 = new Array('JS', 'PHP', 1, null, function () {}, {});
console.log(arr2);

// Vì nếu sử dụng typeof để kiểm tra kiểu dữ liệu của array thì nó sẽ hiển thị là 1 object
console.log(Array.isArray(arr2)); // Nên ta sẽ sử dụng như thế này
console.log(lang[2]);
