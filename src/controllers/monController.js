import monService from "../services/monService";
////create mon
let handlecreateNewMon = async (req, res) => {
    let message = await monService.createNewMon(req.body);
    // console.log(message);
    return res.status(200).json(message);
}
//lay all mon
let handleGetAllMon = async (req, res) => {
    let id = req.query.id;

    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Thiếu thông tin ID mon',
            mons: []
        })
    }
    let mons = await monService.GetAllMon(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        mons
    })

}
//al size
let handleGetAllSize = async (req, res) => {
    let id = req.query.id;

    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Thiếu thông tin ID mon',
            size: []
        })
    }
    let size = await monService.GetAllSize(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        size
    })

}
//xoa mon
let handleDeleteMon = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Thiếu tham số đầu vào!!"
        })
    }
    let message = await monService.deleteMon(req.body.id);
    return res.status(200).json(message);
}/////edit mon
let handleEditMon = async (req, res) => {
    let data = req.body;
    let message = await monService.updateMonData(data);
    return res.status(200).json(message)

}
let getMonByIdDM = async (req, res) => {
    let limit = req.query.limit;
    try {
        let mondm = await monService.getMonDanhMuc(limit)
        return res.status(200).json(mondm)

    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Lỗi từ máy chủ!!!!'
        })

    }
}

let getAllMonHome = async (req, res) => {
    let limit = req.query.limit;
    if (!limit) limit = 100;
    try {
        let allmonhome = await monService.getAllMonHome(+limit)
        return res.status(200).json(allmonhome)

    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Lỗi từ máy chủ!!!!'
        })

    }
}
// them danh muc
module.exports = {
    handleGetAllMon: handleGetAllMon,
    handleGetAllSize: handleGetAllSize,
    handlecreateNewMon: handlecreateNewMon,
    handleDeleteMon: handleDeleteMon,
    handleEditMon: handleEditMon,
    getMonByIdDM: getMonByIdDM,
    getAllMonHome: getAllMonHome,
}