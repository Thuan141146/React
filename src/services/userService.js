import db from "../models/index";
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

let hasUserPassword = (matkhau) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(matkhau, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    })
}

let handleUserLogin = (ten_tk, matkhau) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};

            let isExist = await checkUserTen_tk(ten_tk);
            if (isExist) {
                //nguoi dung khong ton tai

                let user = await db.tai_khoan.findOne({
                    where: { ten_tk: ten_tk },
                    attributes: ['email', 'ten_tk', 'roleid', 'matkhau', 'diachi', 'gioitinh'],
                    raw: true
                });
                if (user) {
                    //comparepassword
                    let check = await bcrypt.compareSync(matkhau, user.matkhau);
                    //let check = true;
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = 'ok';
                        delete user.matkhau,
                            userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = 'Mật khẩu không chính xác';
                    }


                } else {
                    userData.errCode = 2;
                    userData.errMessage = 'Người dùng không tồn tai'
                }

            } else {
                userData.errCode = 1;
                userData.errMessage = 'Tên đăng nhập và mật khẩu không chính xác vui lòng nhập lại !!!'

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

//api lay tat car thong tin nguoi dung
let GetAllUsers = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = '';
            if (userId === 'ALL') {
                users = await db.tai_khoan.findAll({
                    attributes: {
                        exclude: ['matkhau']
                    }

                })
            }
            if (userId && userId !== 'ALL') {
                users = await db.tai_khoan.findOne({
                    where: { id: userId },
                    attributes: {
                        exclude: ['matkhau']
                    }
                })
            }
            resolve(users)

        } catch (e) {
            reject(e);
        }
    })
}

//them tai khoan moi
let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // check email co to tai khong
            let check = await checkUserTen_tk(data.ten_tk);
            if (check === true) {
                resolve({
                    errCode: 1,
                    errMessage: 'Tên đăng nhập đã được sử dụng vui lòng nhập tên khác !!'
                })
            } else {
                let hashPasswordFromBcrypt = await hasUserPassword(data.matkhau);
                await db.tai_khoan.create({
                    email: data.email,
                    ten_tk: data.ten_tk,
                    matkhau: hashPasswordFromBcrypt,
                    diachi: data.diachi,
                    gioitinh: data.gioitinh,
                    sdt: data.sdt,
                    khu: data.khu,
                    roleid: data.roleid,
                    anh: data.avatar
                })

                resolve({
                    errCode: 0,
                    message: 'ok'
                })
            }


        } catch (e) {
            reject(e);

        }
    })
}

//xoa nguoi dung
let deleteUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        let foundUser = await db.tai_khoan.findOne({
            where: { id: userId }
        })
        if (!foundUser) {
            resolve({
                errCode: 2,
                errMessage: "Người dùng không tồn tại"
            })
        }

        await db.tai_khoan.destroy({
            where: { id: userId }
        })

        resolve({
            errCode: 0,
            errMessage: "Người dùng đã được xóa"
        })
    })

}

//update nguoi dung

let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log('check nodejs:', data)
            if (!data.id || !data.roleid || !data.gioitinh || !data.khu) {

                resolve({
                    errCode: 2,
                    errMessage: 'Thiếu thông tin đầu vào'
                })
            }
            let user = await db.tai_khoan.findOne({
                where: { id: data.id },
                raw: false
            })
            if (user) {
                user.email = data.email;
                user.ten_tk = data.ten_tk;
                user.diachi = data.diachi;
                user.gioitinh = data.gioitinh;
                user.roleid = data.roleid;
                user.khu = data.khu;
                user.sdt = data.sdt;
                if (data.avatar) {
                    user.anh = data.avatar;
                }
                await user.save();

                resolve({
                    errCode: 0,
                    message: 'Cập nhật tài khoản thành công'
                });
            }
            else {
                resolve({
                    errCode: 1,
                    errmessage: 'Người dùng không tồn tại'
                });
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getAllCodeSevice = (typeInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!typeInput) {
                resolve({
                    errCode: 1,
                    errMessage: "Thiếu tham số đầu vào"
                })
            } else {
                let res = {};
                let allcode = await db.Allcode.findAll({
                    where: { type: typeInput }
                });
                res.errCode = 0;
                res.data = allcode;
                resolve(res);
            }


        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    handleUserLogin: handleUserLogin,
    GetAllUsers: GetAllUsers,
    createNewUser: createNewUser,
    deleteUser: deleteUser,
    updateUserData: updateUserData,
    getAllCodeSevice: getAllCodeSevice,

}