import { 
    GET_LIST_KONTAK, 
    POST_ADD_KONTAK, 
    DELETE_KONTAK, 
    DETAIL_KONTAK, 
    UPDATE_KONTAK 
        } from "../../actions/KontakAction";

const initialState = {
    getListKontakLoading: false,
    getListKontakResult: false,
    getListKontakError: false,

    postAddKontakLoading: false,
    postAddKontakResult: false,
    postAddKontakError: false,

    deleteKontakLoading: false,
    deleteKontakResult: false,
    deleteKontakError: false,

    detailKontakResult: false,

    updateKontakLoading: false,
    updateKontakResult: false,
    updateKontakError: false
}

const kontak = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_KONTAK:
            return {
                ...state,
                getListKontakLoading: action.payload.loading,
                getListKontakResult: action.payload.data,
                getListKontakError: action.payload.errorMessage
            }

        case POST_ADD_KONTAK:
            return {
                ...state,
                postAddKontakLoading: action.payload.loading,
                postAddKontakResult: action.payload.data,
                postAddKontakError: action.payload.errorMessage
            }

        case DELETE_KONTAK:
            return {
                ...state,
                deleteKontakLoading: action.payload.loading,
                deleteKontakResult: action.payload.data,
                deleteKontakError: action.payload.errorMessage
            }

        case DETAIL_KONTAK:
            return {
                ...state,
                detailKontakResult: action.payload.data
            }

        case UPDATE_KONTAK:
            return {
                ...state,
                updateKontakLoading: action.payload.loading,
                updateKontakResult: action.payload.data,
                updateKontakError: action.payload.errorMessage
            }

        default:
            return state;
    }
}

export default kontak