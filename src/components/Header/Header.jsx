import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

const Header = (props) => {

    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="logo" />
            <div>
                {props.auth.isAuth ? <div>{props.auth.login} <button onClick={props.logout}>Log Out</button></div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
};

export default Header;