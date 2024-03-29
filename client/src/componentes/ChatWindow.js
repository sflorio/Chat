import React from 'react';

import Message from './Message';

const ChatWindow = (props) => {
    const chat = props.chat
        .map(m => <Message 
            key={Date.now() * Math.random()}
            user={m.name}
            message={m.message}/>);

    return(
        <div className='chat-container'>
            {chat}
        </div>
    )
};

export default ChatWindow;