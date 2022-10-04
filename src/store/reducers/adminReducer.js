import actionTypes from '../actions/actionTypes';

const initialState = {
    isaloadingGender: false,
    genders: [],
    roles: [],
    positions: [],
    users: [],
    danhmucs: [],
    topDanhMuc: [],

}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        ///gioitinh
        case actionTypes.FETCH_GENDER_START:
            let copyState = { ...state };
            copyState.isaloadingGender = true;
            // console.log('B1809299 fire fetch gender start:', action)
            return {
                ...copyState
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data;
            state.isaloadingGender = false;
            // console.log('B1809299 fire fetch gender success:', action)
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_FAIDED:
            // console.log('B1809299 fire fetch gender faided:', action)
            state.isaloadingGender = false;
            state.genders = [];
            return {
                ...state,

            }
        ///khuvuc
        case actionTypes.FETCH_POSITION_SUCCESS:
            state.positions = action.data;
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_FAILDED:
            state.positions = [];
            return {
                ...state,

            }
        //loaitaikhoan
        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data;
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_FAIDED:
            state.roles = [];
            return {
                ...state,

            }
        case actionTypes.FETCH_ALL_USERS_SUCCESS:
            state.users = action.users;
            return {
                ...state,

            }
        case actionTypes.FETCH_ALL_USERS_FAIDED:
            state.users = [];
            return {
                ...state,

            }

        ///all danh muc
        case actionTypes.FETCH_ALL_DANHMUC_SUCCESS:
            state.danhmucs = action.danhmucs;
            return {
                ...state,

            }
        case actionTypes.FETCH_ALL_DANHMUC_FAILDED:
            state.danhmucs = [];
            return {
                ...state,

            }
        // topdanhmuc
        case actionTypes.FETCH_TOP_DANHMUC_SUCCESS:
            state.topDanhMuc = action.dataTopDanhMuc;
            return {
                ...state,

            }
        case actionTypes.FETCH_TOP_DANHMUC_FAILDED:
            state.topDanhMuc = [];
            return {
                ...state,

            }


        default:
            return state;
    }
}

export default adminReducer;