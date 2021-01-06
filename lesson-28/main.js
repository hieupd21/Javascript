/*
    For loop (vòng lặp for)
*/

var arr = [
    'JS',
    'PHP',
    'Ruby',
    'Java',
    'Python'
];

// Tối ưu cho vòng lặp bằng cách gán biến đếm độ dài mảng
var arrLength = arr.length;

for (let i = 0; i < arrLength; i++) {
    console.log(arr[i]);
}