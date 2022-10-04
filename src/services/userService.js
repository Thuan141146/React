import axios from '../axios';

const handleLoginApi = (ten_tk, matkhau) => {
    return axios.post('/api/login', { ten_tk, matkhau });
}
const getAllUsers = (inputId) => {

    return axios.get(`/api/get-all-users?id=${inputId}`)

}

const createNewUserSevice = (data) => {
    console.log('check from sevice:', data)
    return axios.post('/api/create-new-user', data)
}

const deleteUserSevice = (userId) => {
    // return axios.delete('/api/delete-user', { id: userId })
    return axios.delete('/api/delete-user', {
        data: { id: userId }
    });
}
const editUserSevice = (inputData) => {
    return axios.put('/api/edit-user', inputData);
}

const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`)
}


export {
    handleLoginApi,
    getAllUsers,
    createNewUserSevice,
    deleteUserSevice,
    editUserSevice,
    getAllCodeService

}

