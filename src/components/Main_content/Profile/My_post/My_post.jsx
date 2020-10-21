import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './My_post.module.css'

let NewMyPost = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field type="text" name="newMyPostText" component="input" />
        <button className={s.send} >send</button>
    </form>
}
NewMyPost = reduxForm({ form: "ProfileNewMyPost" })(NewMyPost);

const My_post = (props) => {

    let addPost = (data) => {

        props.addPost(data.newMyPostText);
    }

    return (
        <div className={s.my_post}>
            <h2>My posts</h2>
            <NewMyPost onSubmit={addPost} />
        </div>
    )
};

export default My_post;