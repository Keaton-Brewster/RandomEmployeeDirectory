function Reducer(state, action) {
    switch (action.type) {
        case 'set-users':
            return {
                users: action.payload
            }
        default:
            throw new Error();
    }
}

export default Reducer;










