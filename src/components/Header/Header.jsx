import React from "react";
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className = {s.header}>
            <img src='https://cdn.dribbble.com/users/10882/screenshots/15172621/media/cd2246d5d0f54f9a4316bd4d276764b2.png?compress=1&resize=400x300'
                alt = 'https://birdinflight.com/wp-content/uploads/2014/08/monkey-selfie-cover-e1462271269546.jpg'></img>
            <div className = { s.loginBlock }>
                { props.isAuth ? props.login
                    : <NavLink to = { '/login' }>Login</NavLink> }
            </div>
        </header>);
};

export default Header;