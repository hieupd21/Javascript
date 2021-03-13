/*
    forEach() method
        - ôn lại Object prototype
        - ôn lại for/in
        - hiểu hasOwnProperty method
*/

// Tạo forEach2() nào
Array.prototype.forEach2 = function (callback) {
    for(var index in this) {
        if(this.hasOwnProperty(index)){
            callback(this[index], index, this);
        }
    }
}
 
var courses = [
    'JS',
    'PHP',
    'Ruby'
];

// forEach() không quan tâm đến thuộc tính length set trước
courses.length = 1000;

var x = courses.forEach2(function (course) {
    console.log(course);
})