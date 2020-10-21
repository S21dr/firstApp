import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../../redux/auth-reducer';
import LoginReduxForm from './Login_form';

let Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) return <Redirect to="profile" />
    return <>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { login })(Login);