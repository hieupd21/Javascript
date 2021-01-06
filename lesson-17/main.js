/*
Làm việc với array
    1. to string
    2. join
    3. pop
    4. push
    5. shift
    6. unshift
    7. splicing
    8. concat
    9. slicing

*/

var lang = [
    'JS',
    'PHP',
    'Python'
];

// 1. to string ( toString )
console.log('1. Mảng hiện tại: ' + lang.toString());

// 3. pop ( pop() )
lang.pop(); // xoá phần tử cuối mảng và trả về phần tử đã xóa.
console.log('3. sau khi pop: ' + lang);

// 4. push ( push() )
lang.push('Ruby', 'Java'); // thêm phần tử vào cuối mảng và trả về độ dài mới.
console.log('4. sau khi push: ' + lang);

// 5. shift ( shift() )
lang.shift(); // xóa phần tử đầu tiên của mảng và trả về phần tử đã xóa.
console.log('5. sau khi shift: ' + lang);

// 6. unshift ( unshift() )
lang.unshift('Kotlin'); // thêm phần tử vào đầu mảng và trả về độ dài mảng.
console.log('6. sau khi unshift: ' + lang);

// 7. splicing ( splice() )
lang.splice(1,1, 'test'); // chọn vị trí của phần tử và xóa số lượng phần tử và có thể thêm phần tử vào trong mảng phụ thuộc vào vị trí xóa cho trước.
console.log('7. sau khi splicing: ' + lang);

// 8. concat( concat() )
var lang2 = [
    'con',
    'cat'
];
console.log(lang.concat(lang2)); // nối mảng

// 9. slicing ( slice() )
console.log(lang.slice(1,2));

/*
cho array là mảng:
    1. Nếu mảng có ít hơn 3 phần tử thì xóa phần tử đầu mảng.
    2. Nếu mảng có nhiều hơn 2 phần tử thì xóa 2 phần tử cuối mảng.
*/
function run(arr) {
    if(arr.length < 3) {
        arr.shift();
    }
    if(arr.length > 2) {
        arr.splice(arr.length-2,arr.length);
    }

    return arr;
}