import { userApi } from "../Api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const ON_PAGE_CHANGED = 'ON_PAGE_CHANGED';
const LOADER = 'LOADER'
const FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS'

let initianalState = {
    frends: [
        // { id: 1, followed: true, fulName: 'Dmitry', status: 'u4u react', location: { city: 'Cheb', country: 'Rus' } },
        // { id: 2, followed: true, fulName: 'Yana', status: 'web-desiner', location: { city: 'Cheb', country: 'Rus' } },
    ],
    countSizeUsers: 10,
    totalCount: 0,
    pageNumberActive: 5,
    loader: false,
    followingProgress: [],
}

const frendsReducer = (state = initianalState, action) => {

    switch (action.type) {
        case FOLLOW: {

            let newState = {
                ...state, frends: state.frends.map(u => {
                    if (u.id === action.id) {

                        return { ...u, followed: true }
                    }
                    return u;
                })
            };
            return newState;
        }
        case UNFOLLOW: {
            let newState = {
                ...state, frends: state.frends.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };
            return newState;
        }
        case SET_USERS: {
            let newState = {
                ...state, frends: action.response, totalCount: action.totalCount
            }

            return newState;
        }
        case ON_PAGE_CHANGED: {
            let newState = {
                ...state, pageNumberActive: action.pageNumberActive
            }
            return newState;
        }
        case LOADER: {
            let newState = {
                ...state, loader: action.loader
            }
            return newState;
        }
        case FOLLOWING_PROGRESS: {
            let newState = {
                ...state, followingProgress: action.followingProgress ? [...state.followingProgress, action.id] : state.followingProgress.filter(id => id != action.id)
            }
            return newState;
        }
        default: return state;
    }
}

export const followCreator = (id) => {
    return { type: FOLLOW, id }
};
export const unfollowCreator = (id) => {
    return {
        type: UNFOLLOW,
        id: id
    }
};
export const setUsersCreator = (response, totalCount) => ({ type: SET_USERS, response, totalCount });
export const onPageChangedCreator = (pageNumberActive) => ({ type: ON_PAGE_CHANGED, pageNumberActive });
export const loaderCreator = (loader) => ({ type: LOADER, loader });
export const followingProgressCreator = (followingProgress, id) => ({ type: FOLLOWING_PROGRESS, followingProgress, id });

export const getUsers = (countSizeUsers, pageNumberActive) => {
    return (dispatch) => {
        dispatch(loaderCreator(true))
        userApi.getUsers(countSizeUsers, pageNumberActive)
            .then(response => {
                dispatch(loaderCreator(false))
                dispatch(setUsersCreator(response.data.items, response.data.totalCount))
            })
    }
}
export const follow = (id) => {
    return (dispatch) => {
        dispatch(followingProgressCreator(true, id))
        userApi.follow(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followCreator(id));
                }
                dispatch(followingProgressCreator(false, id))
            })
    }
}

export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(followingProgressCreator(true, id))
        userApi.unfollow(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowCreator(id));
                }
                dispatch(followingProgressCreator(false, id))
            })
    }
}


export default frendsReducer;