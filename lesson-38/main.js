/*
    filter() method
*/

// Tạo filter2() nào
Array.prototype.filter2 = function (callback) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (result) {
                output.push(this[index]);
            }
        }
    }
    return output;
}
 
var courses = [
    {
        name: 'JS',
        coin: 10
    },
    {
        name: 'PHP',
        coin: 20
    },
    {
        name: 'Ruby',
        coin: 30
    }
];

var x = courses.filter2(function (course) {
    return course.coin != 10;
});
console.log(x);