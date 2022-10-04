import db from "../models/index";

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

module.exports = {
    GetAllMon: GetAllMon,

}