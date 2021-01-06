### Danh sách và bài tập
    - lesson 1: 1 số hàm build-in
    - lesson 2: Toán tử (số học, gán, so sánh, logic)
    - lesson 3: Toán tử số học
    - lesson 4: Toán tử gán
    - lesson 5: Toán tử chuỗi
    - lesson 6: Toán tử so sánh (>, <, ==)
    - lesson 7: Boolean
    - lesson 8: If-else
    - lesson 9: Toán tử logic
    - lesson 10: Kiểu dữ liệu trong JS
    - lesson 11: Toán tử so sánh (===, !===)
    - lesson 12: Toán tử so sánh và phép so sánh (falsy, truthy)
    - lesson 13: Chuỗi trong JS
    - lesson 14: Làm việc với string (chuỗi)
    - lesson 15: Làm việc với number (số)
    - lesson 16: Array (mảng)
    - lesson 17: Làm việc với array (mảng)
    - lesson 18: Function (hàm)
    - lesson 19: Tham số hàm
    - lesson 20: Hiểu hơn về hàm
    - lesson 21: Các loại hàm
    - lesson 22: Object
    - lesson 23: Object Constructor (Bảng thiết kế của đối tượng) (***)
    - lesson 24: Object Prototype (Nguyên liệu xây dựng đối tượng)
    - lesson 25: Đối tượng Date
    - lesson 26: Câu lệnh rẽ nhánh if-else và switch-case
    - lesson 27: Toán tử 3 ngôi
    - lesson 28: For loop (vòng lặp for)
    - lesson 29: For/in loop (vòng lặp for/in)
    - lesson 30: For/of loop (vòng lặp for/of)
    - lesson 31: While loop (vòng lặp while)
    - lesson 32: Do/While loop (vòng lặp do/while)
    - lesson 33: Nested loop (vòng lặp lồng nhau)
    - lesson 34: Array Method (các phương thức của array)

### Kiểu dữ liệu Boolean (true - false)
Trong JS có 6 giá trị sau là Falsy:
    - 0
    - false
    - ''
    - undefined
    - NaN
    - null
và khi convert sang boolean nó sẽ có giá trị false.
Còn lại tất cả giá trị khác là Truthy. Kể cả những giá trị đặc biệt sau:
    - '0'
    - 'false'
    - [] (array rỗng)
    - {} (object rỗng)
    - function(){} (hàm trống)

### Kiểu dữ liệu
sử dụng typeof + tên biến để kiểm tra kiểu dữ liệu.
Lưu ý: Object và Array đều là kiểu dữ liệu Object.

### Toán tử so sánh
so sánh tuyệt đối dùng ===.

### Toán tử so sánh (&& và ||)
- Đối với && thì nó sẽ tiến hành so sánh lần lượt từ trái qua phải cho đến khi không còn giá trị nào để so sánh. Nếu gặp 1 trong 6 giá trị mang giá trị false của JS (0, false, '', undefined, NaN, null) thì sẽ convert sang giá trị false và console.log ra console là false.
- Đối với || thì nó sẽ tiến hành so sánh lần lượt từ trái qua phải. Tuy nhiên giá trị đầu tiên là true thì nó sẽ console.log ra console giá trị đó và không tiếp tục so sánh, còn nếu là false thì tiếp tục so sánh giá trị tiếp theo. trường hợp tất cả giá trị đều mang giá trị false thì nó sẽ lấy giá trị cuối cùng và console.log ra màn hình.

### Template String
Bắt đầu chuỗi bằng `` và thêm các biến vào trong kí tự đó như sau `${variable}`