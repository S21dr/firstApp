import { stopSubmit } from "redux-form";
import { authApi } from "../Api/api";

const SET_USER_DATA = 'SET_USER_DATA';



let initianalState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initianalState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            let newState = { ...state, ...action.data };
            return newState;
        }
        default: return state;
    }
}


export const authCreator = (id, login, email, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: { id, login, email, isAuth }
    }
};
export const authData = () => {
    return (dispatch) => {
        return authApi.authData()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(authCreator(response.data.data.id, response.data.data.login, response.data.data.email, true));
                }
            })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authApi.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(authData())
                } else {
                    debugger
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error";
                    dispatch(stopSubmit("login", { _error: message }))
                }
            })
    }
}
export const logout = () => {
    return (dispatch) => {
        authApi.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(authCreator(null, null, null, false));
                }
            })
    }
}

export default authReducer;