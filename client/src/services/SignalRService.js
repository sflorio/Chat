
import { HubConnectionBuilder, HttpTransportType } from '@microsoft/signalr';

export class signalRService  {
    constructor() {
        this.connection = new HubConnectionBuilder()
        .withUrl('https://localhost:7112/chatHub', {transport: HttpTransportType.LongPolling}  )
        .withAutomaticReconnect()
        .build();
    }

    enviarMensajes = async (user, message) => {
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
        }
        else {
            alert('No connection to server yet.');
        }
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
}