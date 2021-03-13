/*
    Callback
*/

function callback(params) {}
function func(value) {
    console.log(value);
}
callback(func(123));

// khởi tạo array method map2
Array.prototype.map2 = function(callback) {
    var output = [];
    var arrLength = this.length;
    for(var i = 0; i < arrLength; i++) {
        var result = callback(arr[i], i);
        output.push(result);
    }
    return output;
}

var arr = ['JS', 'PHP', 'Ruby'];

var x = arr.map2(function(arr) {
    return arr;
});
console.log(x);

var api = 'https://jsonplaceholder.typicode.com/users';

fetch(api)
    .then(function(res) {
        return res.json();
        // JSON.parse == res.json()
    })
    .then(function(json) {
        console.log(json);
    })
    .catch(function(err) {
        console.error('Có lỗi');
    })