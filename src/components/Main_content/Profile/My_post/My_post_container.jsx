import React from 'react';
import { connect } from 'react-redux';
import { addPostCreator, updatePostInputCreator } from '../../../../redux/profileReducer';
import My_post from './My_post';



let MapStateToProps = (state) => {

    return {
        newMyPost: state.profilePage.newMyPost,
    }
}

let MapDispatchToProps = (dispatch) => {

    return {
        addPost: (newMyPostText) => {
            dispatch(addPostCreator(newMyPostText));
        },
    }
}

const My_post_container = connect(MapStateToProps, MapDispatchToProps)(My_post);

export default My_post_container;