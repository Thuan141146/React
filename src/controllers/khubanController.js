import khubanService from "../services/khubanService";
///alll khu
let handleGetAllKhu = async (req, res) => {
    let id = req.query.id;

    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Thiếu thông tin ID khu vuc',
            khus: []
        })
    }
    let khus = await khubanService.GetAllKhu(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        khus
    })

}
///all ban
let handleGetAllBan = async (req, res) => {
    let id = req.query.id;

    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Thiếu thông tin ID ban',
            ban: []
        })
    }
    let ban = await khubanService.GetAllBan(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        ban
    })

}
module.exports = {
    handleGetAllKhu: handleGetAllKhu,
    handleGetAllBan: handleGetAllBan,
}