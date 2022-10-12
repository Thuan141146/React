import db from "../models/index";
///////////////////////////////
///////////danh muc////////////
///////////////////////////////
/// all danh muc
let GetAllDanhMuc = (danhmucId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let danhmuc = '';
            if (danhmucId === 'ALL') {
                danhmuc = await db.danh_muc.findAll({

                })
            }
            if (danhmucId && danhmucId !== 'ALL') {
                danhmuc = await db.danh_muc.findOne({
                    where: { id: danhmucId }
                })
            }
            resolve(danhmuc)
        } catch (e) {
            reject(e);
        }
    })
}
/// new
let createNewDanhMuc = (data) => {
    return new Promise(async (resolve, reject) => {

        await db.danh_muc.create({
            TEN_DM: data.TEN_DM,
            ANH: data.ANH
        })

        resolve({
            errCode: 0,
            message: 'ok'
        })
    }
    )
}
//toploaisk
let getTopDanhMucHome = (limitInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            let topdanhmuc = await db.danh_muc.findAll({
                limit: limitInput,
                raw: true,
                nest: true
            })
            resolve({
                errCode: 0,
                data: topdanhmuc,
            })
        } catch (e) {
            reject(e);

        }
    })
}
//////////////////////////////
///////////loai sk////////////
//////////////////////////////
/// all loai sk
let GetAllLoaiSK = (loaiskId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let loaisk = '';
            if (loaiskId === 'ALL') {
                loaisk = await db.loai_sk.findAll({

                })
            }
            if (loaiskId && loaiskId !== 'ALL') {
                loaisk = await db.loai_sk.findOne({
                    where: { id: loaiskId }
                })
            }
            resolve(loaisk)

        } catch (e) {
            reject(e);
        }
    })
}
/// new
let createNewLoaiSuKien = (data) => {
    return new Promise(async (resolve, reject) => {

        await db.loai_sk.create({
            TEN_LSK: data.TEN_LSK,
            ANH: data.ANH,
            MO_TA: data.MO_TA,
        })

        resolve({
            errCode: 0,
            message: 'ok'
        })
    }
    )
}
///tp loai sk
let getTopLoaiSKHome = (limitInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            let toploaisk = await db.loai_sk.findAll({
                limit: limitInput,
                raw: true,
                nest: true
            })
            resolve({
                errCode: 0,
                data: toploaisk,
            })
        } catch (e) {
            reject(e);

        }
    })
}
//get all su kien
let getAllsukien = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let sukien = await db.loai_sk.findAll({
                attributes: {
                    exclude: ['ANH']
                }
            })
            resolve({
                errCode: 0,
                data: sukien
            })

        } catch (e) {
            reject(e)

        }
    })

}
//create info event
let createInfoSK = (inputdata) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputdata.sukienid || !inputdata.contentHTML
                || !inputdata.contentMarkdown || !inputdata.action) {
                resolve({
                    errCode: 1,
                    errMessage: "Thiếu thông tin đầu vào !!"
                })
            } else {
                if (inputdata.action === 'CREATE') {
                    await db.Markdown.create({
                        contentHTML: inputdata.contentHTML,
                        contentMarkdown: inputdata.contentMarkdown,
                        mota: inputdata.mota,
                        sukienid: inputdata.sukienid,
                    })
                } else if (inputdata.action === 'EDIT') {
                    let sukienMarkdown = await db.Markdown.findOne({
                        where: { sukienid: inputdata.sukienid },
                        raw: false
                    })
                    if (sukienMarkdown) {
                        sukienMarkdown.contentHTML = inputdata.contentHTML;
                        sukienMarkdown.contentMarkdown = inputdata.contentMarkdown;
                        sukienMarkdown.mota = inputdata.mota;
                        sukienMarkdown.updateAt = new Date();
                        await sukienMarkdown.save()
                    }
                }

                resolve({
                    errCode: 0,
                    errMessage: "Lưu thông tin sự kiện thành công"
                })
            }

        } catch (e) {
            reject(e);

        }
    })
}
///get getDetailSKById
let DetailSKById = (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputId) {
                resolve({
                    errCode: 1,
                    errMessage: "Thiếu tham số đầu vào!!"
                })
            } else {
                let data = await db.loai_sk.findOne({
                    where: {
                        id: inputId
                    },
                    include: [
                        {
                            model: db.Markdown,
                            attributes: ['mota', 'contentHTML', 'contentMarkdown']
                        }
                    ],
                    raw: false,
                    nest: true

                })
                if (data && data.ANH) {
                    data.ANH = new Buffer(data.ANH, 'base64').toString('binary');
                }
                if (!data) data = {};
                resolve({
                    errCode: 0,
                    data: data
                })
            }

        } catch (e) {
            reject(e);
        }
    })
}
module.exports = {
    GetAllDanhMuc: GetAllDanhMuc,
    createNewDanhMuc: createNewDanhMuc,
    getTopDanhMucHome: getTopDanhMucHome,
    ////////////////////loai sk
    GetAllLoaiSK: GetAllLoaiSK,
    createNewLoaiSuKien: createNewLoaiSuKien,
    getTopLoaiSKHome: getTopLoaiSKHome,
    getAllsukien: getAllsukien,
    createInfoSK: createInfoSK,
    DetailSKById: DetailSKById,
}