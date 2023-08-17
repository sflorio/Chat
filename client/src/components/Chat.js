import { HttpTransportType } from '@microsoft/signalr';
import React, { useState, useEffect, useRef } from 'react';
import {signalRService} from '../services/SignalRService'
import ChatWindow from './ChatWindow';
import MessageInput from './MessageInput';
import UserInput from './UserInput';

const Chat = () => {
    const [service, setService] = useState(new signalRService(HttpTransportType.LongPolling));
    const [user, setUser] = useState('');
    const [chat, setChat ] = useState([]);
    const latestChat = useRef(null);
    latestChat.current = chat;

    let updateMessageView = (message) => {
        const updatedChat = [...latestChat.current];
        updatedChat.push(message);
        setChat(updatedChat);
    }

    useEffect(() => {
        if(service)
            service.recibirMensajes(updateMessageView)

    }, [service.connection]);

    return (
        <div style={{ margin: '0 30%' }}>
            <UserInput user={user} setUser={setUser} />
            {/* <button title='connect' onClick={() => service.connect(HttpTransportType.WebSockets)}>conectar</button> */}
            <hr/>
            <ChatWindow chat={chat}/>
            <hr />
            <MessageInput user={user} sendMessage={service.enviarMensajes} onSucced={updateMessageView} />
            {/* <button title='disconnect' onClick={service.disconnect} >desconectar</button> */}
        </div>
    );
};

export default Chat;