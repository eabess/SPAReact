import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';
// import Friends from '../Friends/Friends';

const Navbar = (props) => {

    let styleMeny = ({ isActive }) => ({color: isActive ? 'green' : 'red'});

    // let dialogsElNav = props.state.avaFriends
    //     .map( d => <Friends 
    //         id = {d.id} 
    //         name = {d.name} 
    //         src = {d.src} 
    //         alt = {d.alt} />);
    
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
            
            <div className = {s.empty} ></div>
            
            <div className = {s.item}>
                <NavLink to = '/friends' style = {styleMeny}>Friends</NavLink>
            </div>

            {/* <div>
                {dialogsElNav}
            </div> */}
        </nav>
    );
};

export default Navbar;