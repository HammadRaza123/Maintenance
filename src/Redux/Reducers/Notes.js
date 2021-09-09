import { NOTES } from '../Types';
const intialState = {
    notes: ''
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case NOTES: {
            console.log(action.payload);
            return {
                ...state,
                notes: action.payload,
            }
        }
        default:
            return state

    }
}
export default reducer;