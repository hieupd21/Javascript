/*
    Nested loop
*/

var arr = [
    [1, 2],
    [3, 4],
    [5, 6]
];

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}

// In chuỗi ngược từ 10 về 0
for (let i = 10; i > 0; i--) {
    console.log(i);
}

// In chuỗi giảm 5 đơn vị
for (let i = 100; i >= 0; i-=5) {
    console.log(i);
}