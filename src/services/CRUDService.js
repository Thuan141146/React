import bcrypt from 'bcryptjs';

import db from '../models/index';


const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hasUserPassword(data.matkhau);
            await db.tai_khoan.create({
                ten_tk: data.ten_tk,
                matkhau: hashPasswordFromBcrypt,
                roleid: data.roleid
            })

            resolve('ok r nha')

        } catch (e) {
            reject(e);
        }
    })

}

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

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.tai_khoan.findAll({
                raw: true,
            });
            resolve(users)

        } catch (e) {
            reject(e);
        }
    })
}
let getUserInfoById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.tai_khoan.findOne({
                where: { id: userId },
                raw: true,
            })

            if (user) {
                resolve(user)
            }
            else {
                resolve([])
            }

        } catch (e) {
            reject(e);
        }
    })

}
let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.tai_khoan.findOne({
                where: { id: data.id }
            })
            if (user) {
                user.ten_tk = data.ten_tk;

                await user.save();
                let allUser = await db.tai_khoan.findAll();
                resolve(allUser);

            }
            else {
                resolve();
            }

        } catch (e) {
            console.log(e);
        }
    })
}
let deleteUserById = (userid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.tai_khoan.findOne({
                where: { id: userid }
            })
            if (user) {
                await user.destroy();
            }
            // else{

            // }
            resolve();
        } catch (e) {
            reject(e);
        }
    })
}
module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    updateUserData: updateUserData,
    deleteUserById: deleteUserById,
}