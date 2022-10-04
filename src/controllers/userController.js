import userService from '../services/userService';
//dang nhap
let handleLogin = async (req, res) => {
    let ten_tk = req.body.ten_tk;
    let matkhau = req.body.matkhau;
    //console.log('Ten dang nhap:' + ten_tk)

    if (!ten_tk || !matkhau) {
        return res.status(500).json({
            errCode: 1,
            message: ' Vui lòng nhập tên đăng nhập và mật khẩu !'
        })
    }

    let userData = await userService.handleUserLogin(ten_tk, matkhau);
    console.log(userData)
    // //kiem tra ten dang nhap

    // // kiem tra mat khau hop le

    // // tra ve thong tin tai khoan
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
        // errCode: 0,
        // message: 'heelloo',
        // tendn: ten_tk,
        // test: 'test'
    })
}
//lat danh sach nguoi dung
let handleGetAllUsers = async (req, res) => {
    let id = req.query.id;

    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Thiếu thông tin id người dùng',
            users: []
        })

    }

    let users = await userService.GetAllUsers(id);
    console.log(users)
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        users
    })

}
//them nguoi dung moi
let handlecreateNewUser = async (req, res) => {
    let message = await userService.createNewUser(req.body);
    // console.log(message);
    return res.status(200).json(message);
}
//sua nguoi dung
let handleEditUser = async (req, res) => {
    let data = req.body;
    let message = await userService.updateUserData(data);
    return res.status(200).json(message)

}

//xoa nguoi dung
let handleDeleteUser = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Thiếu tham số đầu vào!!"
        })
    }
    let message = await userService.deleteUser(req.body.id);
    return res.status(200).json(message);
}

/////
let getAllcode = async (req, res) => {
    try {

        let data = await userService.getAllCodeSevice(req.query.type);
        return res.status(200).json(data);


    } catch (e) {
        console.log('get all code error: ', e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })

    }
}
module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers,
    handlecreateNewUser: handlecreateNewUser,
    handleEditUser: handleEditUser,
    handleDeleteUser: handleDeleteUser,
    getAllcode: getAllcode,
}