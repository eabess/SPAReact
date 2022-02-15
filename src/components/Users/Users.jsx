import React from "react";
import s from './users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers( [
            {id: 1, 
                followed: false,
                fullName: 'Piter',
                status: 'Good morning!',
                location: {
                    sity: 'N.Novgorod',
                    country: 'Russia'
                },
                photoSrc: 'https://deadbees.net/wp-content/uploads/2016/07/200716_44.jpg', 
                photoAlt: 'https://audit.msu.ru/wp-content/themes/audit/images/noavatar.png'  
            },
            {id: 2, 
                followed: false,
                fullName: 'Maha',
                status: 'Helloooo!',
                location: {
                    sity: 'Moscow',
                    country: 'Russia'
                },
                photoSrc: 'https://deadbees.net/wp-content/uploads/2016/07/200716_41.jpg', 
                photoAlt: 'https://audit.msu.ru/wp-content/themes/audit/images/noavatar.png' 
            },
            {id: 3, 
                followed: true,
                fullName: 'Liza',
                status: "i'm a butterfly",
                location: {
                    sity: 'N.Novgorod',
                    country: 'Russia'
                },
                photoSrc: 'https://birdinflight.com/wp-content/uploads/2014/08/monkey-selfie-cover-e1462271269546.jpg', 
                photoAlt: 'https://audit.msu.ru/wp-content/themes/audit/images/noavatar.png'  
            },
        ]);
    }

    return (
        <div>
            {
                props.users.map( u => <div key = {u.id}>
                    <span>
                        <div>
                            <img src = { u.photoSrc } alt = { u.photoAlt } className = { s.userPhoto } />
                        </div>
                        <div>
                            { u.followed 
                                ? <button onClick = {() => { props.unfollow(u.id) }}> Unfollow </button>
                                : <button onClick = {() => { props.follow(u.id) }}> Follow </button> }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{ u.fullName }</div>
                            <div>{ u.status }</div>
                        </span>
                        <span>
                            <div>{ u.location.country }</div>
                            <div>{ u.location.sity }</div>
                        </span>
                    </span>
                </div> )
            }
        </div>)
};

export default Users;