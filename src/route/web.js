import express from "express";
import homeController from "../controllers/homeController.js";
import userController from "../controllers/userController";
import danhmucController from "../controllers/danhmucController";
import monController from "../controllers/monController";
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
    //mon
    router.get('/api/get-all-mon', monController.handleGetAllMon);
    return app.use("/", router);
}

module.exports = initWebRoutes;