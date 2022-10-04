import monService from "../services/monService";

//lay all mon
let handleGetAllMon = async (req, res) => {
    let id = req.body.id;

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
// them danh muc
module.exports = {
    handleGetAllMon: handleGetAllMon,


}