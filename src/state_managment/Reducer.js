import axios from 'axios'

function Reducer(state, action) {
    switch (action.type) {
        case "update":
            return {
                state: axios.get("https://randomuser.me/api/?results=2")
            }// Do something here
        default:
            throw new Error();
    }
}

export default Reducer;










