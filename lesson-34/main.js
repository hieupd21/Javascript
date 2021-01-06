/*
    Array Methods:
        - forEach()
        - every()
        - some()
        - find()
        - filter()
        - map()
        - reduce()
*/

var courses = [
    {
        id: 1,
        name: 'JS',
        coin: 0
    },
    {
        id: 2,
        name: 'PHP',
        coin: 0
    },
    {
        id: 3,
        name: 'Java',
        coin: 10
    },
    {
        id: 4,
        name: 'JS',
        coin: 10
    },
    {
        id: 5,
        name: 'JS',
        coin: 30
    }
];

// forEach()
// Đọc từ giá trị trong mảng và trả lần lượt tất cả các object trong mảng
courses.forEach(function (course, index) {
    console.log(index, course);
});
console.log('________________________');

// every()
/* 
    Kiểm tra tất cả các phần tử thoải mãn 1 điều kiện gì đấy
    - trả về true nếu tất cả phần tử thoải mãn điều kiện
    - trả về false nếu 1 trong số các phần tử trong mảng không thoải mãn điều kiện
*/
var isFree = courses.every(function (course, index) {
    // Chỉ cần phần tử nào trả về false thì sẽ lập tức dừng lại
    console.log(index);
    return course.coin === 0;
});
console.log(isFree);
console.log('________________________');

// some()
/*
    Đối ngược lại với every()
    - trả về true nếu 1 trong số các phần tử trong mảng thoải mãn điều kiện
    - trả về false nếu tất cả phần tử thoải mãn điều kiện
*/
var isCost = courses.some(function (course, index) {
    return course.coin > 0;
});
console.log(isCost);
console.log('________________________');

// find()
/* 
    Đúng như cái tên. Phương thức tìm kiếm phần tử trong mảng và trả lại 1 object.
    Tuy nhiên nó chỉ trả về kết quả đầu tiên nó tìm được.
*/
var isFind = courses.find(function (course, index) {
        return course.name === 'JS';
    }
);
console.log(isFind);
console.log('________________________');

// filter()
/*
    Khác với find() thì filter() sẽ trả lại 1 mảng các Object có điều kiện tìm yêu cầu
*/
var isFilter = courses.filter(function (course, index) {
        return course.name === 'JS';
    }
);
console.log(isFilter);
console.log('________________________');

// map()
// Cơ bản là dùng để duyệt các object trong mảng thành các mảng con
var newCourses = courses.map(function (course) {
    return {
        id: course.id,
        name: `Name: ${course.name}`,
        coin: course.coin
    };
});
console.log(newCourses);
console.log('________________________');

// reduce()
var totalCoin = courses.reduce(function (total, currentValue) {
    return total + currentValue.coin;
}, 0);
console.log(totalCoin);



// BÀI TẬP

/*
    Cho trước hàm 'checkPositiveNumber' có tham số 'number' sẽ nhận 1 mảng gồm các phần tử là những con số bất kì. Hàm này được tạo ra với mục đíc kiểm tra toàn bộ các chữ số có phải là số nguyên hay không.
        - Nếu toàn bộ là số dương sẽ trả về true.
        - Nếu 1 trong các phần tử không phải là số dương sẽ trả về false.
*/

function checkPositiveNumbers(numbers) {
    var check = numbers.every(function (number) {
        return number > 0;
    })
    return check;
}

/*
    Cho hàm 'hasFreeCourse' để kiếm tra danh sách khóa học có khóa học nào miễn phí hay không.
        - trả về true nếu đối số truyền vào có chứa khóa học miễn phí.
        - trả về false nếu đối số truyền vào không chứa bất kì 1 khóa học miễn phí.
*/
function hasFreeCourses(courses) {
    var check = courses.some(function (course) {
       return course.vnd === 0; 
    })
    return check;
}

/*
    Cho hàm 'findAMonsterByAttack' để tìm những con 'monster'.
        - Nếu monster có chỉ số 'attack' = 150 thì trả về 'monster' đó trong hàm 'findAMonsterByAttack'.
        - Nếu trường hợp không có thì trả về null
*/
function findAMonsterByAttack(monsters) {
    var check = monsters.find(function (monster) {
       return monster.attack === 150; 
    })
    return check ? true : null;
}

/*
    Cho hàm 'findStringsInArrayByKeyword' và tham số 'keyword' sẽ là 1 chuỗi bất kỳ. Tham số thứ 2 có tên 'strings' sẽ là một array chứa các chuỗi bất kỳ, array này có định dạng như sau:
    ['hi', 'abc', '123'];
    Trong hàm cho trước, hãy trả về 1 array mới gồm các phần tử trong array 'strings' có chứa giá trị của biến 'keyword'. Trường hợp không có phần tử nào thì trả về mảng rỗng.
*/
function findStringsInArrayByKeyword(keyword, strings) {
    var check = strings.filter(function (string) {
        return string.indexOf(keyword) > -1;
    })
    return check;
}

/*
    Cho hàm 'findEqualValues' có hai tham số là 'array1' và 'array2'
        - Trường hợp array1 và array2 có các giá trị bằng nhau thì hàm findEqualValues sẽ trả về mảng mới chứa các giá trị đó.
        - Trường hợp không có giá trị bằng nhau giữa hai tham số thì hàm trả về array rỗng [].
*/
function findEqualValues(array1, array2) {
    return array1.filter(item => array2.includes(item));
}

/*
    Cho trước biến inputs là một array gồm các phần tử là các chữ số bất kì. Trong hàm run, hãy trả về array mới từ array inputs đã cho với giá trị các phần tử có giá trị x 3 lần.
*/
function x3Value(inputs) {
    var x1 = inputs.map(function (input) {
        return input *= 3;
    })
    return x1;
}

/*
    Chuyển mảng từ dạng number sang string
*/
function convertToNumber(inputs) {
    var x2 = inputs.map(function (input) {
        return String(input);
    })
    return x2;
}

/*
    Chuyển từ kiểu string hoặc num sang boolean
*/
function convertToBoolean(inputs) {
    var x3 = inputs.map(function (input) {
        return Boolean(input);
    })
    return x3;
}