import { profileApi } from "../Api/api";


const ADD_POST = 'ADD_POST';

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTO = 'SET_PHOTO'

let initianalState = {
    postData: [{ message: 'privet kak dela?' }, { message: 'Super' }, { message: 'Kruto' }],
    profileInfo: null,
    status: '',
}

const profileReducer = (state = initianalState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newState = { ...state, postData: [...state.postData] };
            let newPost = {
                message: action.newMyPostText
            };
            newState.postData.push(newPost);

            return newState;
        }
        case SET_USER_PROFILE: {
            let newState = { ...state };
            newState.profileInfo = action.profileInfo;
            return newState;
        }
        case SET_STATUS: {
            let newState = { ...state, status: action.status };

            return newState;
        }
        case SET_PHOTO: {
            let newState = {
                ...state,
                profileInfo: { ...state.profileInfo, photos: action.photo }
            }
            return newState
        }
        default: return state;
    }

};


export const addPostCreator = (newMyPostText) => ({ type: ADD_POST, newMyPostText });
export const setUserProfile = (profileInfo) => ({ type: SET_USER_PROFILE, profileInfo })
export const setProfileStatus = (status) => ({ type: SET_STATUS, status })
export const setPhotoSuccess = (photo) => ({ type: SET_PHOTO, photo })

export const getStatus = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId)
            .then(response => {
                dispatch(setProfileStatus(response.data))
            })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0)
                    dispatch(setProfileStatus(status))
            })
    }
}

export const savePhoto = (file) => {
    return (dispatch) => {
        profileApi.savePhoto(file)
            .then(response => {
                if (response.data.resultCode === 0)
                    dispatch(setPhotoSuccess(response.data.data.photos))
            })
    }
}

export default profileReducer;