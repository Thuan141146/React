import db from "../models/index";
///all khu
let GetAllKhu = (khuId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let khus = '';
            if (khuId === 'ALL') {
                khus = await db.khu_vuc.findAll({

                })
            }
            if (khuId && khuId !== 'ALL') {
                khus = await db.size.findOne({
                    where: { id: khuId }
                })
            }
            resolve(khus)

        } catch (e) {
            reject(e);
        }
    })
}
///all ban
let GetAllBan = (banId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let ban = '';
            if (banId === 'ALL') {
                ban = await db.ban.findAll({

                })
            }
            if (banId && banId !== 'ALL') {
                ban = await db.ban.findOne({
                    where: { id: banId }
                })
            }
            resolve(ban)

        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    GetAllKhu: GetAllKhu,
    GetAllBan: GetAllBan,
}