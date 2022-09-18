import userSevice from '../services/userSevice';

let handleLogin = async (req, res) => {
    let ten_tk = req.body.ten_tk;
    let matkhau = req.body.matkhau;
    //console.log('Ten dang nhap:' + ten_tk)
    if (!ten_tk || !matkhau) {
        return res.status(500).json({
            errCode: 1,
            message: ' thieu thong tin dau vao!'
        })
    }

    let userData = await userSevice.handleUserLogin(ten_tk, matkhau);
    // //kiem tra ten dang nhap

    // // kiem tra mat khau hop le

    // // tra ve thong tin tai khoan


    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData ? userData.user : {}

        // errCode: 0,
        // message: 'heelloo',
        // tendn: ten_tk,
        // test: 'test'


    })
}

module.exports = {
    handleLogin: handleLogin
}