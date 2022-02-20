import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }
    // debugger;
    return (
        <div>
            <div className = { s.background }>
                <img src = 'https://wallpaperscave.ru/images/original/18/07-31/games-the-elder-scrolls-v-skyrim-71945.jpg'
                alt = 'https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM'></img>
                
            </div>
            <div className = { s.descriptionBlock }>
                <img src = { props.profile.photos.large != null ? props.profile.photos.large : userPhoto } />
                <div>
                    <div>
                        { `Name user: ${props.profile.fullName}` }
                    </div>
                    <div>
                        {props.profile.aboutMe && `About me: ${props.profile.aboutMe}` }
                    </div>
                </div>
            </div>
        </div>);
};

export default ProfileInfo;