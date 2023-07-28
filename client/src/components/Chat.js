import { HttpTransportType } from '@microsoft/signalr';
import React, { useState, useEffect, useRef } from 'react';
import {signalRService} from '../services/SignalRService'
import ChatWindow from './ChatWindow';
import MessageInput from './MessageInput';
import UserInput from './UserInput';

const Chat = () => {
    const [service, setService] = useState(new signalRService());
    const [user, setUser] = useState('');
    const [chat, setChat ] = useState([]);
    const latestChat = useRef(null);
    latestChat.current = chat;

    let updateMessageView = (message) => {
        const updatedChat = [...latestChat.current];
        updatedChat.push(message);
        setChat(updatedChat);
    }


    let tenCharMessage = "asdfghhjkwe";
    let oneHundredCharMessage = "asdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkwe";
    let oneThousandCharMessage = "asdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkwe";

    let oneSecondFrequency = 1;
    let tenSecondsFrequency = 10;
    let thirtySecondsFrequency = 30;



    let runTest1 = () => {
        const cantidadDeMensajes = 1;
        runBaseTest(tenCharMessage, oneSecondFrequency, cantidadDeMensajes)
    }

    let runTest2 = () => {
        const cantidadDeMensajes = 10;
        runBaseTest(tenCharMessage, oneSecondFrequency, cantidadDeMensajes)
    }
    let runTest3 = () => {
        const cantidadDeMensajes = 100;
        runBaseTest(tenCharMessage, oneSecondFrequency, cantidadDeMensajes)
    }
    let runTest4 = () => {
        const cantidadDeMensajes = 1000;
        runBaseTest(tenCharMessage, oneSecondFrequency, cantidadDeMensajes)
    }



    let runTest5 = () => {
        const cantidadDeMensajes = 1;
        runBaseTest(oneHundredCharMessage, tenSecondsFrequency, cantidadDeMensajes)
    }

    let runTest6 = () => {
        const cantidadDeMensajes = 10;
        runBaseTest(oneHundredCharMessage, tenSecondsFrequency, cantidadDeMensajes)
    }
    let runTest7 = () => {
        const cantidadDeMensajes = 100;
        runBaseTest(oneHundredCharMessage, tenSecondsFrequency, cantidadDeMensajes)
    }
    let runTest8 = () => {
        const cantidadDeMensajes = 1000;
        runBaseTest(oneHundredCharMessage, tenSecondsFrequency, cantidadDeMensajes)
    }



    let runTest9 = () => {
        var frecuencia = 1; // 1 segundo
        const cantidadDeMensajes = 1;
        runBaseTest(oneThousandCharMessage, thirtySecondsFrequency, cantidadDeMensajes)
    }

    let runTest10 = () => {
        var frecuencia = 1; // 1 segundo
        const cantidadDeMensajes = 10;
        runBaseTest(oneThousandCharMessage, thirtySecondsFrequency, cantidadDeMensajes)
    }
    let runTest11 = () => {
        var frecuencia = 1; // 1 segundo
        const cantidadDeMensajes = 100;
        runBaseTest(oneThousandCharMessage, thirtySecondsFrequency, cantidadDeMensajes)
    }
    let runTest12 = () => {
        var frecuencia = 1; // 1 segundo
        const cantidadDeMensajes = 1000;
        runBaseTest(oneThousandCharMessage, thirtySecondsFrequency, cantidadDeMensajes)
    }

    let runBaseTest = (mensaje,frecuencia, cantidadDeMensajes) => {
        var i = 0;
        while (i < cantidadDeMensajes) {
            (function(i) {
              setTimeout(function() {
                    service.enviarMensajes("testUser",mensaje, () => {})                    
              }, (frecuencia*1000) * i)
            })(i++)
          }
    }


    useEffect(() => {
        if(service)
            service.recibirMensajes(updateMessageView)

    }, [service.connection]);

    return (
        <div>
            <UserInput user={user} setUser={setUser} />
            {/* <button title='connect' onClick={() => service.connect(HttpTransportType.WebSockets)}>conectar</button> */}
            <hr/>
            <ChatWindow chat={chat}/>
            <hr />
            <button onClick={runTest4} >run test 4</button>
            <MessageInput user={user} sendMessage={service.enviarMensajes} onSucced={updateMessageView} />
            <button title='disconnect' onClick={service.disconnect} >desconectar</button>
        </div>
    );
};

export default Chat;