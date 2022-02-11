import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
// import DialogItemUser from "./DialogItem/DialogItemUser";
// import { NavLink } from "react-router-dom";
// import Friends from "../Friends/Friends";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

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

    // let newMessageElement = React.createRef();

    // let addMessage = () => {
    //     debugger;
    //     props.dispatch(sendMessageCreator());
    // };
    
    // let onMessageChange = () => {
    //     debugger;
    //     let body = newMessageElement.current.value;
    //     let action = updateNewMessageBodyCreator(body);
    //     props.dispatch(action);
    // };

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = (e) => { // event/f - объект событие, которое передает сюда textarea
        let body = e.target.value; // с помощью "е" достучаться до объекта, с которым произошло событие
        props.store.dispatch(updateNewMessageBodyCreator(body));
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

                {/* {dialogsElUser} */}
                {/* { messagesElements }
                <div className = { s.addMessage } >
                    <textarea  onChange = { onMessageChange } 
                        ref = { newMessageElement } 
                        value = { props.newMessageText }></textarea>
                    <button onClick = { addMessage } >Add message</button>
                </div> */}
            </div>
            
        </div>
    );
};

export default Dialogs;