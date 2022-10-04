import axios from '../axios';

const getAllDanhMuc = (inputId) => {

    return axios.get(`/api/get-all-danhmuc?id=${inputId}`)

}
const createNewDanhMucSevice = (data1) => {
    console.log('check from sevice:', data1)
    return axios.post('/api/create-new-danhmuc', data1)
}

// top danhmuc
const getTopDanhMucService = (limit) => {
    return axios.get(`/api/top-danhmuc-home?limit=${limit}`)
}
export {
    getAllDanhMuc,
    createNewDanhMucSevice,
    getTopDanhMucService,

}