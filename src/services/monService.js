import db from "../models/index";
////create mon
let createNewMon = (data) => {
    return new Promise(async (resolve, reject) => {

        await db.mon.create({
            TEN_MON: data.TEN_MON,
            SIZE: data.SIZE,
            ID_DM: data.ID_DM,
            GIA: data.GIA,
            MO_TA: data.MO_TA,
            ANH: data.ANH,
        })

        resolve({
            errCode: 0,
            message: 'ok'
        })
    }
    )
}
///get all mon
let GetAllMon = (monId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let mons = '';
            if (monId === 'ALL') {
                mons = await db.mon.findAll({

                })
            }
            if (monId && monId !== 'ALL') {
                mons = await db.mon.findOne({
                    where: { id: monId }
                })
            }
            resolve(mons)

        } catch (e) {
            reject(e);
        }
    })
}
/////get all size
let GetAllSize = (sizeId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let size = '';
            if (sizeId === 'ALL') {
                size = await db.size.findAll({

                })
            }
            if (sizeId && sizeId !== 'ALL') {
                size = await db.size.findOne({
                    where: { id: sizeId }
                })
            }
            resolve(size)

        } catch (e) {
            reject(e);
        }
    })
}
let deleteMon = (monId) => {
    return new Promise(async (resolve, reject) => {
        let mon = await db.mon.findOne({
            where: { id: monId }
        })
        if (!mon) {
            resolve({
                errCode: 2,
                errMessage: "Món không tồn tại"
            })
        }

        await db.mon.destroy({
            where: { id: monId }
        })

        resolve({
            errCode: 0,
            errMessage: "Món đã được xóa"
        })
    })

}
//edit mon
let updateMonData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log('check nodejs:', data)
            if (!data.id || !data.SIZE || !data.ID_DM) {

                resolve({
                    errCode: 2,
                    errMessage: 'Thiếu thông tin đầu vào'
                })
            }
            let mons = await db.mon.findOne({
                where: { id: data.id },
                raw: false
            })
            if (mons) {
                mons.TEN_MON = data.TEN_MON;
                mons.SIZE = data.SIZE;
                mons.ID_DM = data.ID_DM;
                mons.GIA = data.GIA;
                mons.MO_TA = data.MO_TA;
                if (data.ANH) {
                    mons.ANH = data.ANH;
                }
                await mons.save();

                resolve({
                    errCode: 0,
                    message: 'Cập nhật món thành công'
                });
            }
            else {
                resolve({
                    errCode: 1,
                    errmessage: 'Món không tồn tại'
                });
            }
        } catch (e) {
            reject(e);
        }
    })
}

// all mon theo danh muc
let getMonDanhMuc = (limitInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            let mondm = await db.mon.findAll({
                where: { id: limitInput },
                raw: true,
                nest: true
            })
            resolve({
                errCode: 0,
                data: mondm,
            })
        } catch (e) {
            reject(e);

        }
    })
}

///all mon home
let getAllMonHome = (limitInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            let allmonhome = await db.mon.findAll({
                limit: limitInput,
                where: { ID_DM: '4' },
                raw: true,
                nest: true
            })
            resolve({
                errCode: 0,
                data: allmonhome,
            })
        } catch (e) {
            reject(e);

        }
    })
}
module.exports = {
    GetAllMon: GetAllMon,
    GetAllSize: GetAllSize,
    createNewMon: createNewMon,
    deleteMon: deleteMon,
    updateMonData: updateMonData,
    getMonDanhMuc: getMonDanhMuc,
    getAllMonHome: getAllMonHome,

}