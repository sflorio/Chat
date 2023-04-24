import React, { useState, useEffect, useRef } from 'react';
import {signalRService} from '../services/SignalRService'
import ChatWindow from './ChatWindow';
import MessageInput from './MessageInput';
import UserInput from './UserInput';

const Chat = () => {
    const [user, setUser] = useState('');
    const [service, setService] = useState(new signalRService());
    const [ chat, setChat ] = useState([]);
    const latestChat = useRef(null);

    latestChat.current = chat;

    useEffect(() => {
        service.recibirMensajes(message => {
            const updatedChat = [...latestChat.current];
            if(message.name != user){
                updatedChat.push(message);
                setChat(updatedChat);
            }
        })

    }, [service.connection]);

    return (
        <div>
            <UserInput user={user} setUser={setUser} />
            <hr/>
            <ChatWindow chat={chat}/>
            <hr />
            <MessageInput user={user} sendMessage={service.enviarMensajes} />
        </div>
    );
};

export default Chat;