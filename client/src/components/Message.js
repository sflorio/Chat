import React from 'react';

const Message = (props) => (
    <div className='message' >
        <p><strong>{props.user}</strong> dice: {props.message}</p>        
    </div>
);

export default Message;