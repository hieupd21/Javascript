/*
    Đối tượng Date
*/

var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

console.log(`${day} ${month} ${year}`);