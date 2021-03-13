/*
    some2() method & every2() method
*/

// Tạo some2() nào
Array.prototype.some2 = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                return true;
            }
        }
    }
    return false;
}

// Tạo every2() nào
Array.prototype.every2 = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if(!callback(this[index], index, this)) {
                return false;
            }
        }
    }
    return true;
}
 
var courses = [
    {
        name: 'JS',
        coin: 10,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 20,
        isFinish: true
    },
    {
        name: 'Ruby',
        coin: 30,
        isFinish: false
    }
];

var x1 = courses.some2(function (course) {
    return course.isFinish === true;
});
console.log(x1);

var x2 = courses.every2(function (course) {
    return course.isFinish === true;
});
console.log(x2);