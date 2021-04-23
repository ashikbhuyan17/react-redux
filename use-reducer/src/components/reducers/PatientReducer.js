export const patientState = {
    patients: []
}

export const patientReducer = (state, action) => {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case 'ADD_PATIENT':
            const newPatient = {
                id: action.id,
                name: action.name,
            }
            const allPatient = [...state.patients, newPatient]
            return { patients: allPatient };
        case 'REMOVE_PATIENT':
            return state;
        default:
            return state;
    }

}