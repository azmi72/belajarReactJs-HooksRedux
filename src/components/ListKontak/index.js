import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListKontak, deleteKontak, detailKontak } from '../../actions/KontakAction';

function ListKontak() {
    const {
        getListKontakLoading,
        getListKontakResult,
        getListKontakError,
        deleteKontakResult,
        updateKontakResult
    } = useSelector((state) => state.KontakReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        //Panggil action getListKontak
        dispatch(getListKontak());

    }, [dispatch])

    useEffect(() => {
        if (deleteKontakResult) {
            dispatch(getListKontak());
        }
    }, [deleteKontakResult, dispatch])


    return (
        <div>
            <h4>List Kontak</h4>
            {getListKontakResult ? (
                getListKontakResult.map((kontak) => {
                    return (
                        <p key={kontak.id}>
                            {kontak.nama} -
                            {kontak.nohp} -
                            <button style={{marginLeft: '5px'}} onClick={() => dispatch(deleteKontak(kontak.id))}>
                                Hapus
                            </button>
                            <button style={{marginLeft: '5px'}} onClick={() => dispatch(detailKontak(kontak))}>
                                Edit
                            </button>
                        </p>
                    )
                })
            ) : getListKontakLoading ? (
                <p>Loading ...</p>
            ) : (
                <p>{getListKontakError ? getListKontakError : "Data Kosong"}</p>
            )}
        </div>
    )
}

export default ListKontak