function Reducer(state, action) {
    switch (action.type) {
        case 'set-users':
            return {
                users: action.payload
            }
        default:
            throw new Error('Unexpeceted error thrown in src/state_managment/Reducer.js');
    }
}

export default Reducer;










