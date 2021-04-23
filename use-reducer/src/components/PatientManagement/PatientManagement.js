import React, { useReducer, useRef } from 'react';
import { patientState, patientReducer } from '../reducers/PatientReducer'

const PatientManagement = () => {
    const nameRef = useRef()
    const [state, dispatch] = useReducer(patientReducer, patientState)
    console.log(state);
    const handleSubmit = (e) => {
        dispatch({
            type: 'ADD_PATIENT',
            name: nameRef.current.value,
            id: state.patients.length
        })
        nameRef.current.value = ''
        e.preventDefault()
    }
    return (
        <>
            <h1>this is patientManagement</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" ref={nameRef} />

                <input type="submit" value="submit" />
            </form>
        </>
    );
};

export default PatientManagement;