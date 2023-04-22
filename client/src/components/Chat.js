import React, { useState, useEffect, useRef } from 'react';
import {signalRService} from '../services/SignalRService'
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';

const Chat = () => {
    const [ chat, setChat ] = useState([]);
    const latestChat = useRef(null);
    const service = new signalRService();

    latestChat.current = chat;

    useEffect(() => {
        service.recibirMensajes(message => {
            const updatedChat = [...latestChat.current];
            updatedChat.push(message);
        
            setChat(updatedChat);
        })

    }, [service.connection]);

    return (
        <div>
            <ChatInput sendMessage={service.enviarMensajes} />
            <hr />
            <ChatWindow chat={chat}/>
        </div>
    );
};

export default Chat;