import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const POST_ADD_KONTAK = "POST_ADD_KONTAK";
export const DELETE_KONTAK = "DELETE_KONTAK";
export const DETAIL_KONTAK = "DETAIL_KONTAK";
export const UPDATE_KONTAK = "UPDATE_KONTAK";

export const getListKontak = () => {
    return (dispatch) => {

        // Tahap Loading
        dispatch({
            type: GET_LIST_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // Tahap Get API
        axios
            .get('http://localhost:3001/kontaks', { timeout: 120000 })
            .then((res) => {
                dispatch({
                    type: GET_LIST_KONTAK,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_LIST_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}

export const postAddKontak = (data) => {
    return (dispatch) => {

        dispatch({
            type: POST_ADD_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios
            .post('http://localhost:3001/kontaks', data, { timeout: 120000 })
            .then((res) => {
                dispatch({
                    type: POST_ADD_KONTAK,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: POST_ADD_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}

export const deleteKontak = (id) => {
    return (dispatch) => {

        dispatch({
            type: DELETE_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios
            .delete('http://localhost:3001/kontaks/' + id, { timeout: 120000 })
            .then((res) => {
                dispatch({
                    type: DELETE_KONTAK,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}

export const detailKontak = (data) => {
    
    return (dispatch) => {
        dispatch({
            type: DETAIL_KONTAK,
            payload: {
                data: data
            }
        })
    }
}

export const updateKontak = (data) => {
    return (dispatch) => {

        dispatch({
            type: UPDATE_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios
            .put('http://localhost:3001/kontaks/' + data.id, data, { timeout: 120000 })
            .then((res) => {
                dispatch({
                    type: UPDATE_KONTAK,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}