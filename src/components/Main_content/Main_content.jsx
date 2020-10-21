import React from 'react';
import { Route } from 'react-router-dom';
import Frends_container from './Frends/Frends_container';
import Login from './Login/Login';
import s from './Main_content.module.css'
import Messages from './Messages/Messages';
import Messages_container from './Messages/Messages_container';
import Profile from './Profile/Profile';

const Main_content = () => {
    return (
        <div className={s.main_content}>
            <img className={s.main_content_img} src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/full%20page/img(11).jpg" alt="profile_bg" />
            <Route path='/profile/:profileId?' render={() => <Profile />} />
            <Route path='/messages' render={() => <Messages_container />} />
            <Route path='/frends' render={() => <Frends_container />} />
            <Route path='/login' render={() => <Login />} />
        </div>

    )
};

export default Main_content;