import danhmucService from "../services/danhmucService";
/////////////////////////////
////danh muc ////////////
////////////////////////////
//lay all danh muc
let handleGetAllDanhMuc = async (req, res) => {
    let id = req.query.id;

    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Thiếu thông tin ID_DM',
            danhmuc: []
        })
    }
    let danhmuc = await danhmucService.GetAllDanhMuc(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        danhmuc
    })

}
// them danh muc
let handlecreateNewDanhMuc = async (req, res) => {
    let message = await danhmucService.createNewDanhMuc(req.body);
    // console.log(message);
    return res.status(200).json(message);
}
let getDanhMucHome = async (req, res) => {
    let limit = req.query.limit;
    if (!limit) limit = 10;
    try {
        let topdanhmuc = await danhmucService.getTopDanhMucHome(+limit)
        return res.status(200).json(topdanhmuc)

    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Lỗi từ máy chủ!!!!'
        })

    }
}
//getdanh muc
/////////////////////////////
////loai su kien ////////////
////////////////////////////
//lay all su kien
let handleGetAllLoaiSK = async (req, res) => {
    let id = req.query.id;

    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Thiếu thông tin ID_LSK',
            loaisk: []
        })
    }
    let loaisk = await danhmucService.GetAllLoaiSK(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        loaisk
    })

}
// them danh muc
let handlecreateNewLoaiSK = async (req, res) => {
    let message = await danhmucService.createNewLoaiSuKien(req.body);
    // console.log(message);
    return res.status(200).json(message);
}
let getLoaiSKHome = async (req, res) => {
    let limit = req.query.limit;
    if (!limit) limit = 10;
    try {
        let toploaisk = await danhmucService.getTopLoaiSKHome(+limit)
        return res.status(200).json(toploaisk)

    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Lỗi từ máy chủ!!!!'
        })

    }
}
///all su kien
let handleGetAllSK = async (req, res) => {
    try {
        let sukien = await danhmucService.getAllsukien();
        return res.status(200).json(sukien)

    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi sever',
            loaisk: []
        })
    }
}
//create info su kien
let handlecreateInforSK = async (req, res) => {
    try {
        let response = await danhmucService.createInfoSK(req.body);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi sever',
        })
    }

}
let getDetailSKById = async (req, res) => {
    try {
        let infor = await danhmucService.DetailSKById(req.query.id)
        return res.status(200).json(
            infor
        )

    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Loi tu server'
        })

    }
}
module.exports = {
    handleGetAllDanhMuc: handleGetAllDanhMuc,
    handlecreateNewDanhMuc: handlecreateNewDanhMuc,
    getDanhMucHome: getDanhMucHome,
    //loaisk
    handlecreateNewLoaiSK: handlecreateNewLoaiSK,
    handleGetAllLoaiSK: handleGetAllLoaiSK,
    getLoaiSKHome: getLoaiSKHome,
    handleGetAllSK: handleGetAllSK,
    handlecreateInforSK: handlecreateInforSK,
    getDetailSKById: getDetailSKById,

}