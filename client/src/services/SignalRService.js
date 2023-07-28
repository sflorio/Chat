
import { HubConnectionBuilder, HttpTransportType } from '@microsoft/signalr';

export class signalRService  {
    constructor() {
        this.connection = new HubConnectionBuilder()
        .withUrl('https://localhost:44357/chatHub', {transport: HttpTransportType.LongPolling}  )
        .withAutomaticReconnect()
        .build();
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