
import { HubConnectionBuilder, HttpTransportType } from '@microsoft/signalr';

export class signalRService  {
    constructor(transportProtocol) {
        this.connection = new HubConnectionBuilder()
        .withUrl('https://localhost:7112/chatHub', {transport: transportProtocol}  )
        .withAutomaticReconnect()
        .build();
    }

    connect = async () => {
        if(!this.connection._connectionStarted)
            return this.connection.start()
    }

    enviarMensajes = async (user, message, onSucced) => {
        const chatMessage = {
            name: user,
            message: message
        };

        if (this.connection._connectionStarted) {
            try {                
                await this.connection.send('send', chatMessage);
            }
            catch(e) {
                console.log(e);
            }
            finally{
                onSucced();
            }
        }
        else {
            alert('No connection to server yet.');
        }
    }


    enviarMensajesAsync =  (user, message) => {
        const chatMessage = {
            name: user,
            message: message
        };

        return new Promise(async (resolve) =>{
            await this.connection.send('send', chatMessage);
            return resolve();
        })         
    }

    recibirMensajes = (messageHandler) => {
        if (this.connection) {
            this.connection.start()
                .then(result => {
                    console.log('Connected!');

                    this.connection.on('broadcastMessage', messageHandler );
                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }

    disconnect = () => {
        if(this.connection._connectionStarted)
            this.connection.stop()

    }
}