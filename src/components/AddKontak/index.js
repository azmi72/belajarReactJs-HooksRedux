import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getListKontak, postAddKontak, updateKontak } from '../../actions/KontakAction';

function AddKontak() {
    const [nama, setNama] = useState("");
    const [nohp, setNohp] = useState("");
    const [id, setId] = useState("");
    const { postAddKontakResult, detailKontakResult, updateKontakResult } = useSelector((state) => state.KontakReducer)
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()

        if (id) {
            // Update Kontak
            dispatch(updateKontak({ id: id, nama: nama, nohp: nohp }))
        } else {
            // Tambah Kontak
            dispatch(postAddKontak({ nama: nama, nohp: nohp }))
        }
    }

    useEffect(() => {
        if (postAddKontakResult) {
            dispatch(getListKontak());
            setNama('');
            setNohp('');
        }
    }, [postAddKontakResult, dispatch])

    useEffect(() => {
        if (detailKontakResult) {
            setNama(detailKontakResult.nama);
            setNohp(detailKontakResult.nohp);
            setId(detailKontakResult.id);
        }
    }, [detailKontakResult, dispatch])

    useEffect(() => {
        if (updateKontakResult) {
            dispatch(getListKontak());
            setNama("");
            setNohp("");
            setId("");
        }
    }, [updateKontakResult, dispatch])

    return (
        <div>
            <h4>{id ? "Edit Kontak" : "Add Kontak"}</h4>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    name="nama"
                    placeholder="Nama..."
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                />

                <input
                    type="text"
                    name="nohp"
                    placeholder="No HP..."
                    value={nohp}
                    onChange={(e) => setNohp(e.target.value)}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddKontak