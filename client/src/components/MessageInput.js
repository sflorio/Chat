import React, { useState } from 'react';

const MessageInput = (props) => {
    const [message, setMessage] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const isUserProvided = props.user && props.user !== '';
        const isMessageProvided = message && message !== '';

        if (isUserProvided && isMessageProvided) {
            props.sendMessage(props.user, message);
            setMessage('')
        } 
        else {
            alert('Por favor inserte un usuario y mensaje.');
        }
    }

    const onMessageUpdate = (e) => {
        setMessage(e.target.value);
    }

    return (
        <form 
            onSubmit={onSubmit}>            
            <label htmlFor="message">Mensaje:</label>
            <br />
            <div className='message-input-container'>
            <textarea                 
                id="message"
                name="message"
                className='message-input' 
                value={message}
                onChange={onMessageUpdate} />
           
            <button className='send-button'>Enviar</button>
            </div>
            
        </form>
    )
};

export default MessageInput;