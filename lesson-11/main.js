/*

Toán tử so sánh
    - ===
    - !==

*/

var a = 1;
var b = '1';

console.log(a === b);

/*
Kiểm tra biến bonusPoint có phải chứa giá trị là 50 hay không. Nếu đúng gán true cho result, sai gán false cho result.
*/
function run(bonusPoint) {
    var result;

    if(bonusPoint === 50) {
        result = true;
    } else {
        result = false;
    }

    return result;
}