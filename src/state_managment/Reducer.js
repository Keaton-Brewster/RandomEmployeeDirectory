function Reducer(state, action) {
    switch (action.type) {
        case 'set-root-users':
            return {
               rootUsers: action.payload 
            }
        case 'set-users':
            return {
                users: action.payload
            }
        // case 'sort-z-a':
        //     return {
        //         users: state.users.sort(function (a, b) {
        //             if (a.name.first < b.name.first) { return 1; }
        //             if (a.name.first > b.name.first) { return -1; }
        //             return 0;
        //         })
        //     }
        default:
            throw new Error();
    }
}

export default Reducer;










