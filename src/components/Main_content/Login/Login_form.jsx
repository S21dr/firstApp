import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Login.module.css'

let LoginForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="email" component={"input"} type="text" placeholder="email" />
        </div>
        <div>
            <Field name="password" component={"input"} type="password" placeholder="password" />
        </div>
        {props.error &&
            <div className={s.error}>
                {props.error}
            </div>
        }
        <div>
            <Field name="rememberMe" component={"input"} type="checkbox" />
             Remember me
        </div>
        <button>Login</button>
    </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default LoginReduxForm;