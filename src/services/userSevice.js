import db from "../models/index";
import bcrypt from 'bcryptjs';


let handleUserLogin = (ten_tk, matkhau) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserTen_tk(ten_tk);
            if (isExist) {
                //nguoi dung khong ton tai
                let user = await db.tai_khoan.findOne({
                    where: { ten_tk: ten_tk },
                    attributes: ['ten_tk', 'roleid', 'matkhau'],
                    raw: true
                });
                if (user) {
                    //comparepassword
                    //let check = await bcrypt.compareSync(matkhau, user.matkhau);
                    let check = true;
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = 'ok';
                        delete user.matkhau,
                            userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = 'wrong password';
                    }


                } else {
                    userData.errCode = 2;
                    userData.errMessage = 'Người dùng không tồn tai'
                }

            } else {
                userData.errCode = 1;
                userData.errMessage = 'Tên đăng nhập không tồn tại!! vui lòng nhạp tên đăng nhập khác'

            }

            resolve(userData)

        } catch (e) {
            reject(e);
        }
    })

}


let checkUserTen_tk = (userten_tk) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.tai_khoan.findOne({
                where: { ten_tk: userten_tk }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }

        } catch (e) {
            reject(e);
        }
    })
}
module.exports = {
    handleUserLogin: handleUserLogin,
}