import * as actionTypes from "../actions/actionTypes";


const initialState ={
    channels: [],
}

const reducer = (state = initialState , action) => {
    switch(action.type){
        case actionTypes.CREATE_CHANNEL:
        return {
            ...state,
           channels: state.channels.concat(action.payload),
        };
        default:
        return state;
    }

};
export default reducer;