import actionTypes from './actionTypes';
import { getAllCodeService, createNewUserSevice, getAllUsers, deleteUserSevice, editUserSevice } from '../../services/userService';
import { getAllDanhMuc, createNewDanhMucSevice, getTopDanhMucService } from '../../services/danhmucService';
import { toast } from "react-toastify";

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })
///gioitinh


export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })
            let res = await getAllCodeService("GENDER")
            if (res && res.errCode === 0) {
                //console.log('b1809299 check getstate', getState)
                dispatch(fetchGenderSuccess(res.data))
            } else {
                dispatch(fetchGenderFailded());
            }
        } catch (e) {
            dispatch(fetchGenderFailded());
            console.log('fetchGenderStart', e);

        }

    }

}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailded = () => ({
    type: actionTypes.FETCH_GENDER_FAIDED
})
///khuvuc
export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFailded = () => ({
    type: actionTypes.FETCH_POSITION_FAILDED
})
///loai tai khoan
export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailded = () => ({
    type: actionTypes.FETCH_ROLE_FAIDED
})

//
export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("POSITION");
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data))
            } else {
                dispatch(fetchPositionFailded());
            }
        } catch (e) {
            dispatch(fetchPositionFailded());
            console.log('fetchPositionFailded error', e);

        }

    }

}
//
export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("ROLE");
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data))
            } else {
                dispatch(fetchRoleFailded());
            }
        } catch (e) {
            dispatch(fetchRoleFailded());
            console.log('fetchRoleFailded error', e);
        }
    }
}
//them nguoi dung moi
export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserSevice(data);

            if (res && res.errCode === 0) {
                toast.success("Thêm người dùng mới thành công");
                dispatch(saveUserSucces())
                dispatch(fetchAllUserStart());
            } else {
                dispatch(saveUserFailded());
            }
        } catch (e) {
            dispatch(saveUserFailded());
            console.log('saveUserFailded error', e)
        }
    }
}
//luu user
export const saveUserSucces = () => ({
    type: actionTypes.CREATE_USER_SUCCSESS
})
export const saveUserFailded = () => ({
    type: actionTypes.CREATE_USER_FAILDED
})

///alluser
export const fetchAllUserStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllUserSuccess(res.users.reverse()))
            } else {
                toast.error("Lấy danh sách người dùng không thành công");
                dispatch(fetchAllUserFailded());
            }
        } catch (e) {
            toast.error("Lấy danh sách người dùng không thành công");
            dispatch(fetchAllUserFailded());
            console.log('fetchAllUserFailded error', e);
        }
    }
}
export const fetchAllUserSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data
})
export const fetchAllUserFailded = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_FAIDED
})
///xoa
export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserSevice(userId);
            if (res && res.errCode === 0) {
                toast.success("Xóa người dùng thành công");
                dispatch(deleteUserSuccess())
                dispatch(fetchAllUserStart());
            } else {
                toast.error("Xóa người dùng không thành công");
                dispatch(saveUserFailded());
            }
        } catch (e) {
            toast.error("Xóa người dùng không thành công");
            dispatch(deleteUserFailded());
            console.log('deleteUserFailded error', e)
        }
    }
}
export const deleteUserSuccess = (data) => ({
    type: actionTypes.DELETE_USERS_SUCCESS

})
export const deleteUserFailded = (data) => ({
    type: actionTypes.DELETE_USERS_FAILDED
})
///sua
export const editAUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserSevice(data);
            if (res && res.errCode === 0) {
                toast.success("Cập nhật người dùng thành công");
                dispatch(editUserSuccess())
                dispatch(fetchAllUserStart());
            } else {
                toast.error("Cập nhật người dùng không thành công");
                dispatch(editUserFailded());
            }
        } catch (e) {
            toast.error("Cập nhật người dùng không thành công");
            dispatch(editUserFailded());
            console.log('EditUserFailded error', e)
        }
    }
}
export const editUserSuccess = (data) => ({
    type: actionTypes.EDIT_USERS_SUCCESS

})
export const editUserFailded = (data) => ({
    type: actionTypes.EDIT_USERS_FAILDED
})


///////
//alldanhmuc
export const fetchAllDanhMucStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDanhMuc("ALL");

            if (res && res.errCode === 0) {
                dispatch(fetchAllDanhMucSuccess(res.danhmuc.reverse()))
            } else {
                toast.error("Lấy danh sách người dùng không thành công");
                dispatch(fetchAllDanhMucFailded());
            }
        } catch (e) {
            toast.error("Lấy danh sách người dùng không thành công");
            dispatch(fetchAllDanhMucFailded());
            console.log('fetchAllDanhMucFailde derror', e);
        }
    }
}
export const fetchAllDanhMucSuccess = (data) => ({
    type: 'FETCH_ALL_DANHMUC_SUCCESS',
    danhmucs: data
})
export const fetchAllDanhMucFailded = () => ({
    type: ' FETCH_ALL_DANHMUC_FAILDED'
})

///savedanhmuc
export const createNewDanhMuc = (data1) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewDanhMucSevice(data1);
            // console.log('saveDanhMucss', res)
            if (res && res.errCode === 0) {
                toast.success("Thêm danh mục mới thành công");
                dispatch(saveDanhMucSucces())
                dispatch(fetchAllDanhMucStart());

            } else {
                dispatch(saveDanhMucFailded());
            }
        } catch (e) {
            dispatch(saveDanhMucFailded());
            console.log('saveDanhMucFailded error', e)
        }
    }
}
export const saveDanhMucSucces = () => ({
    type: 'CREATE_DANHMUC_SUCCSESS'
})
export const saveDanhMucFailded = () => ({
    type: 'REATE_DANHMUC_FAIDED'
})
// let res1 = await getTopDanhMucService('');
// console.log('b1809299 check top danh', res1)

export const fetchTopDanhMuc = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDanhMucService('');
            console.log('check res: ', res)
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DANHMUC_SUCCESS,
                    dataTopDanhMuc: res.data,
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DANHMUC_FAILDED,
                })
            }
        } catch (e) {
            console.log('FETCH_TOP_DANHMUC_FAILDED', e)
            dispatch({
                type: actionTypes.FETCH_TOP_DANHMUC_FAILDED,
            })

        }
    }

}