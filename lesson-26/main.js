/*
    Câu lệnh rẽ nhánh if-else và Switch-case
*/

var date = 7;
if(date == 2) {
    console.log('Monday');
} else if(date == 3) {
    console.log('Tueday');
}

switch (date) {
    case 2:
    case 3:
    case 4:
        console.log('Today is 2, 3, 4');
        break;

    case 5:
        console.log('None');
        break;

    default:
        console.error('error');
        break;
}