import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map( d => <DialogItem 
            id = { d.id } 
            name = { d.name } 
            src = { d.src } 
            alt = { d.alt } />);
    let messagesElements = state.messages
        .map( m => <Message 
            message = { m.message } />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => { // event/f - объект событие, которое передает сюда textarea
        let body = e.target.value; // с помощью "е" достучаться до объекта, с которым произошло событие
        props.updateNewMessageBody(body);
    };

    return (
        <div className = { s.dialogs }>
            <div className = { s.dialogsItems }>
                <div>
                    { dialogsElements }
                </div>
                {/* <div>
                    <img src = { props.dialogsPage.userAkk.src } alt = {props.dialogsPage.userAkk.alt} ></img>
                    { props.dialogsPage.userAkk.name }
                </div> */}
            </div>
            <div className = { s.messages }>
                <div> { messagesElements } </div>
                <div>
                    <div><textarea value = { newMessageBody } 
                        onChange = { onNewMessageChange }
                        placeholder = "Enter your message"></textarea></div>
                    <div><button onClick = { onSendMessageClick }>Send</button></div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;