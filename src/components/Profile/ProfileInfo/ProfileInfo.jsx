import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src = 'https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM'
                alt = 'https://birdinflight.com/wp-content/uploads/2014/08/monkey-selfie-cover-e1462271269546.jpg'></img>
            </div>
            <div className = {s.descriptionBlock}>
                ava + description
            </div>
        </div>);
};

export default ProfileInfo;