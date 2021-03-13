/*
Làm việc với chuỗi

    1. length
    2. find index
    3. cut string
    4. replace
    5. convert to uppercase
    6. convert to lowercase
    7. trim
    8. split
    9. get a character by index

*/

var myString = 'Tự học JS và trở thành JS Frontend-Dev JS';

// 1. length ( length )
console.log(myString.length);

// 2. find index ( indexOf() )
console.log(myString.search('JS')); // Tìm giá trị JS đầu tiên
console.log(myString.indexOf('JS', 9)); // Tìm giá trị JS sau giá trị đầu tiên
console.log(myString.lastIndexOf('JS')); // Tìm giá trị JS cuối cùng

// 3. cut string ( slide() )
console.log(myString.slice(3, 9)); // Cắt từ trái sang phải. 3 là vị trí bắt đầu, 9 là vị trí kết thúc.
console.log(myString.slice(-15, -2)); // Cắt từ phải sang trái. -2 là vị trí bắt đầu, -14 là vị tí kết thúc.

// 4. replace ( replace() )
console.log(myString.replace('JS', 'Javacript')); // Chỉ replace được 1 chữ JS đầu tiên.
console.log(myString.replace(/JS/g, 'Javascript')); // replace tất cả chữ JS. sử dụng biểu thức chính quy.

// 5. convert to uppercase
console.log(myString.toUpperCase());

// 6. convert to lowercase
console.log(myString.toLowerCase());

// 7. trim ( trim() )

console.log(myString.trim()); // Tự loại bỏ đi khoảng trắng thừa.

// 8. split ( split() )

var languages = 'JS, PHP, Ruby';
console.log(languages.split(', ')); // cắt chuỗi thành array bằng điểm chung.

// 9. get a character by index ( charAt() )
var string2 = 'Duy Hiếu';
console.log(string2.charAt(4)); // Lấy phần tử ở vị trí số 4 và console.log ra console.

/*
Cho text là 1 biến có thể là bất cứ dữ liệu gì.
    1. Nếu text là chuỗi và có độ dài từ 1 trở lên hãy gán true cho result
    2. Còn lại hãy gán false cho result
*/
function run(text) {
    if (typeof text === 'string' && text.length >= 1) {
        result = true;
    } else {
        result = false;
    }

    return result;
}

/*
Cho trước biến 'title' và 'description' là các chuỗi có nội dung bất kì,
    1. Nếu cả 2 biến cho trước giá trị đều có chứa chuỗi 'Javascript' thì gán 'true' cho 'result'
    2. Trường hợp khác gán 'false' cho 'result'
*/
function string(title, description) {
    s1 = title.indexOf('Javascript');
    s2 = description.indexOf('Javascript');
    if(s1 >= 0 && s2 >= 0) {
        result = true;
    } else {
        result = false;
    }

    return result;
}