/*
Hiểu hơn về toán tử so sánh và phép so sánh
*/

var result = null || false || 0;

if (result) {
    console.log(true);
} else {
    console.log(false);
}

/*
Cho trước các biến a,b,c có thể là bất kì kiểu dữ liệu gì. Sử dụng toán tử logical để giải các yêu cầu sau:
    - Nếu biến a là true thì gán a cho result
    - Nếu biến a là false, b là true thì gán b cho result
    - Nếu biến a, b là false thì gán c cho result
*/

function run(a, b, c) {
    var test = a || b || c;

    return test;
}