/*
Toán tử logic
    1. && - AND (tất cả các vế phải đúng)
    2. || - OR  (chỉ cần 1 vế đúng)
    3. !  - NOT
*/

var a = 1;
var b = 2;
var c = 3;

if( !(a < 0) && b != 3 ) {
    console.log('Điều kiện đúng');
}

/*
Tại F8, bạn sẽ được tặng coin sau khi hoàn tất việc xác minh tài khoản khi đăng ký với email và mật khẩu. Với trường hợp đăng ký với google / facebook thì sẽ được tặng coin ngay.
Cho biến socialType thể hiện người dùng đã đăng ký F8 qua kênh nào. Khi socialType có giá trị 'google' hoặc 'facebook' thì người dùng đã đăng ký tài khoản qua mạng xã hội. Khi socialType có giá trị 'email' thì người dùng đăng ký qua email và mật khẩu.
Cho biến isVerified thể hiện người dùng đã xác minh tài khoản hay chưa (trong trường hợp đăng ký với email và mật khẩu). Biến này có kiểu dữ liệu là boolean, true nghĩa là người dùng đã xác minh và false là người dùng chưa xác minh tài khoản.
Bên phải màn hình là đoạn mã kiểm tra xem người dùng đã đủ điều kiện tặng coin hay chưa. Nếu đủ điều kiện tặng coin thì biến result sẽ có giá trị true. Hãy giúp mình hoàn thiện đoạn mã đó.
*/

function run(socialType, isVerified) {
    var result;

    if (socialType == 'google' || socialType == 'facebook') {
        result = true;
    }
    if (socialType == 'email' && isVerified == true) {
        result = true;
    }

    return result;
}

/*
Tại F8, bạn có thể bấm Thích một bình luận bất kì nếu bạn đã đăng nhập với tư cách thành viên. Hãy giúp mình kiểm tra xem một người có thể thích bình luận trên F8 hay không nhé.
Cho trước biến isAuthenticated là kiểu boolean thể hiện người dùng đã đăng nhập hay chưa. Khi biến này có giá trị true là người dùng đã đăng nhập, ngược lại biến có giá trị false thì người dùng chưa đăng nhập.
Cho biến role thể hiện vai trò của người dùng trên F8. Với role là 'member' thì người dùng có vai trò thành viên, role là 'admin' thì người dùng là quản trị viên. Trong trường hợp role có giá trị '' thì người dùng chưa có vai trò trên F8.
*/

function votableCheck(isAuthenticated, role) {
    var result;

    if((role == 'member' || role == 'admin') && isAuthenticated == true) {
        result = true;
    } else {
        result = false;
    }

    return result;
}