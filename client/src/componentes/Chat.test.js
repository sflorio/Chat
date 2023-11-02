import { HttpTransportType } from '@microsoft/signalr';
import {signalRService} from '../servicios/SignalRService'

    const service = new signalRService(HttpTransportType.LongPolling);

    let tenCharMessage = "asdfghhjkwe";
    let oneHundredCharMessage = "asdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkwe";
    let oneThousandCharMessage = "asdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkwe";

    let zeroSecondFrequency = 0;
    const unMensaje = 1; 
    const diezDeMensajes = 10;
    const cienDeMensajes = 100;
    const milDeMensajes = 1000;

    let runTest1 = () => {
        runBaseTest(tenCharMessage, zeroSecondFrequency, unMensaje)
    }
    let runTest2 = () => {
        runBaseTest(tenCharMessage, zeroSecondFrequency, diezDeMensajes)
    }
    let runTest3 = () => {
        runBaseTest(tenCharMessage, zeroSecondFrequency, cienDeMensajes)
    }
    let runTest4 = () => {
        runBaseTest(tenCharMessage, zeroSecondFrequency, milDeMensajes)
    }

    let runTest5 = () => {
        runBaseTest(oneHundredCharMessage, zeroSecondFrequency, unMensaje)
    }
    let runTest6 = () => {
        runBaseTest(oneHundredCharMessage, zeroSecondFrequency, diezDeMensajes)
    }
    let runTest7 = () => {
        runBaseTest(oneHundredCharMessage, zeroSecondFrequency, cienDeMensajes)
    }
    let runTest8 = () => {
        runBaseTest(oneHundredCharMessage, zeroSecondFrequency, milDeMensajes)
    }


    let runTest9 = () => {
        runBaseTest(oneThousandCharMessage, zeroSecondFrequency, unMensaje)
    }
    let runTest10 = () => {
        runBaseTest(oneThousandCharMessage, zeroSecondFrequency, diezDeMensajes)
    }
    let runTest11 = () => {
        runBaseTest(oneThousandCharMessage, zeroSecondFrequency, cienDeMensajes)
    }
    let runTest12 = () => {
        runBaseTest(oneThousandCharMessage, zeroSecondFrequency, milDeMensajes)
    }

    const delay = async (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms))

    let runBaseTest = async (mensaje,frecuencia, cantidadDeMensajes) => {
        await service.connect()
        var i = 0;
        for(i; i < cantidadDeMensajes; i++){
            service.enviarMensajes("testUser",mensaje, () => {})            
            if( i == (cantidadDeMensajes -1)){
                service.disconnect()
            }
        }
    }

test("Test 1", () => {
    runTest1();
    expect(1).toBe(1);
})