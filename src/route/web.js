import express from "express";
import homeController from "../controllers/homeController.js";
import userController from "../controllers/userController";
import danhmucController from "../controllers/danhmucController";
import monController from "../controllers/monController";
import khubanController from "../controllers/khubanController"
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);
    ///user
    router.post('/api/login', userController.handleLogin);
    router.get('/api/get-all-users', userController.handleGetAllUsers);
    router.post('/api/create-new-user', userController.handlecreateNewUser);
    router.put('/api/edit-user', userController.handleEditUser);
    router.delete('/api/delete-user', userController.handleDeleteUser);
    router.get('/api/allcode', userController.getAllcode);
    router.get('/api/top-danhmuc-home')
    /// danhmuc
    router.post('/api/create-new-danhmuc', danhmucController.handlecreateNewDanhMuc);
    router.get('/api/get-all-danhmuc', danhmucController.handleGetAllDanhMuc);
    router.get('/api/top-danhmuc-home', danhmucController.getDanhMucHome);
    ///loaisk
    router.post('/api/create-new-LoaiSK', danhmucController.handlecreateNewLoaiSK);
    router.get('/api/get-all-LoaiSK', danhmucController.handleGetAllLoaiSK);
    router.get('/api/top-toploaisk-home', danhmucController.getLoaiSKHome);
    router.get('/api/get-all-sukien', danhmucController.handleGetAllSK);
    router.post('/api/creat-info-sukien', danhmucController.handlecreateInforSK);
    router.get('/api/get-detail-sukien-by-id', danhmucController.getDetailSKById);
    ///ALL SIZE
    router.get('/api/get-all-Size', monController.handleGetAllSize);
    // router.get('/api/get-all-mon', monController.handleGetAllMon);
    //mon
    router.post('/api/create-new-mon', monController.handlecreateNewMon);
    router.get('/api/get-all-mon', monController.handleGetAllMon);
    router.put('/api/edit-mon', monController.handleEditMon);
    router.delete('/api/delete-mon', monController.handleDeleteMon);
    router.get('/api/get-mon-by-id_dm', monController.getMonByIdDM);
    router.get('/api/all-mon-home', monController.getAllMonHome);
    //khu-ban
    router.get('/api/get-all-khu', khubanController.handleGetAllKhu);
    router.get('/api/get-all-ban', khubanController.handleGetAllBan);
    return app.use("/", router);
}

module.exports = initWebRoutes;