import { authData } from "./auth-reducer";

const AUTHORIZED_SUCCESS = 'AUTHORIZED_SUCCESS';



let initianalState = {
    authotized: false
}

const appReducer = (state = initianalState, action) => {

    switch (action.type) {
        case AUTHORIZED_SUCCESS: {
            let newState = { ...state, authotized: true };
            return newState;
        }
        default: return state;
    }
}


export const authotizedSuccess = () => {
    return {
        type: AUTHORIZED_SUCCESS
    }
};
export const authotized = () => (dispatch) => {
    let promise = dispatch(authData());
    Promise.all([promise]).then(() => {
        dispatch(authotizedSuccess())
    });
}





export default appReducer;