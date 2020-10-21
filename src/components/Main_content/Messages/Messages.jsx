import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { addMessageCreator, updateMessageInputCreator } from '../../../redux/messagesReducer';
import s from './Messages.module.css';


const Dialogs = (props) => {
    let path = '/messages/' + props.id
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Dialog = (props) => {
    
    return (
        <div>
            {props.message}
        </div>
    )
};

let MessagesForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field type="text" component="input" name="newMessage" />
        <button >Send message</button>
    </form>
}
MessagesForm = reduxForm({ form: "messageForm" })(MessagesForm);
const Messages = (props) => {

    let dialogsElements = props.dialogsData.map(d => <Dialogs name={d.name} id={d.id} />)
    let messageElements = props.messageData.map(m => <Dialog message={m.message} />)


    let sendMessage = (data) => {
        props.sendMessage(addMessageCreator(data.newMessage));
    }
    return (
        <div className={s.wrapper}>
            <div className={s.column}>
                {dialogsElements}
            </div>
            <div className={s.column}>
                <div>{messageElements}</div>
                <MessagesForm onSubmit={sendMessage} />
            </div>
        </div>
    )
};

export default Messages;