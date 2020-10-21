import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../redux/Hoc/authRedirect';

import { addMessageCreator, updateMessageInputCreator } from '../../../redux/messagesReducer';
import Messages from './Messages';




let MapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messageData: state.messagesPage.messageData,
        changeNewMessageInputText: state.messagesPage.changeNewMessageInputText,
        isAuth: state.auth.isAuth
    }
}

let MapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (sendMessage) => {
            dispatch(addMessageCreator(sendMessage));
        },
    }
}

export default compose(
    withAuthRedirect,
    connect(MapStateToProps, MapDispatchToProps)
)(Messages);