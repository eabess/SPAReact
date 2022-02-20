import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';

const Navbar = (props) => {

    let styleMeny = ({ isActive }) => ({color: isActive ? 'green' : 'red'});
    
    return (
        <nav className = {s.nav}>
            <div className = {s.item}>
                <NavLink to = '/profile' style = {styleMeny}>Profile</NavLink>
            </div>
            <div className = {s.item}>
                <NavLink to = '/dialogs' style = {styleMeny}>Messages</NavLink>
            </div>
            <div className = {s.item}>
                <NavLink to = '/news' style = {styleMeny}>News</NavLink>
            </div>
            <div className = {s.item}>
                <NavLink to = '/music' style = {styleMeny}>Music</NavLink>
            </div>
            <div className = {s.item}>
                <NavLink to = '/settings' style = {styleMeny}>Settings</NavLink>
            </div>
            <div className = {s.item}>
                <NavLink to = '/users' style = {styleMeny}>Users</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;