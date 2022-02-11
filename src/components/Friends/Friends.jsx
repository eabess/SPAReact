import React from "react";
import s from './Friends.module.css';
import { NavLink } from "react-router-dom";

const Friends = (props) => {

    let pathId = '/profile/' + props.id;
    
    return (
        <div className = {s.item}>
            <NavLink to = {pathId}>
                <img src = {props.src} alt = {props.alt} ></img>
                {props.name}</NavLink>
        </div>);
};

export default Friends;