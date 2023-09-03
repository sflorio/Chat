import { HttpTransportType } from '@microsoft/signalr';
import { React, useState } from 'react';
import {signalRService} from '../services/SignalRService'
import Table from 'react-bootstrap/Table';
import Select from 'react-select';

const TestCommandPanel = () => {
    const [test1Status, setTest1Status ] = useState(false);
    const [test2Status, setTest2Status ] = useState(false);
    const [test3Status, setTest3Status ] = useState(false);
    const [test4Status, setTest4Status ] = useState(false);
    const [test5Status, setTest5Status ] = useState(false);
    const [test6Status, setTest6Status ] = useState(false);
    const [test7Status, setTest7Status ] = useState(false);
    const [test8Status, setTest8Status ] = useState(false);
    const [test9Status, setTest9Status ] = useState(false);
    const [test10Status, setTest10Status ] = useState(false);
    const [test11Status, setTest11Status ] = useState(false);
    const [test12Status, setTest12Status ] = useState(false);
    const [transportProtocol, setTransportProtocol ] = useState(HttpTransportType.LongPolling);

    const service = new signalRService(transportProtocol);

    let tenCharMessage = "asdfghhjkwe";
    let oneHundredCharMessage = "asdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkwe";
    let oneThousandCharMessage = "asdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkweasdfghhjkwe";

    const unMensaje = 1; 
    const diezDeMensajes = 10;
    const cienDeMensajes = 100;
    const milDeMensajes = 1000;

    let runTest1 = () => {
        runBaseTest(tenCharMessage, unMensaje)
        setTest1Status(true);
    }
    let runTest2 = () => {
        runBaseTest(tenCharMessage, diezDeMensajes)
        setTest2Status(true);
    }
    let runTest3 = () => {
        runBaseTest(tenCharMessage, cienDeMensajes)
        setTest3Status(true);
    }
    let runTest4 = () => {
        runBaseTest(tenCharMessage, milDeMensajes)
        setTest4Status(true);
    }

    let runTest5 = () => {
        runBaseTest(oneHundredCharMessage, unMensaje)
        setTest5Status(true);
    }
    let runTest6 = () => {
        runBaseTest(oneHundredCharMessage, diezDeMensajes)
        setTest6Status(true);
    }
    let runTest7 = () => {
        runBaseTest(oneHundredCharMessage, cienDeMensajes)
        setTest7Status(true);
    }
    let runTest8 = () => {
        runBaseTest(oneHundredCharMessage, milDeMensajes)
        setTest8Status(true);
    }

    let runTest9 = () => {
        runBaseTest(oneThousandCharMessage, unMensaje)
        setTest9Status(true);
    }
    let runTest10 = () => {
        runBaseTest(oneThousandCharMessage, diezDeMensajes)
        setTest10Status(true);
    }
    let runTest11 = () => {
        runBaseTest(oneThousandCharMessage, cienDeMensajes)
        setTest11Status(true);
    }
    let runTest12 = () => {
        runBaseTest(oneThousandCharMessage, milDeMensajes)
        setTest12Status(true);
    }

    let runBaseTest = async (mensaje, cantidadDeMensajes) => {
        await service.connect()
        var i = 0;
        for(i; i < cantidadDeMensajes; i++){
            await service.enviarMensajesAsync("testUser", mensaje)
        }

        service.disconnect()
    }

    let getStatusClassByVal = (val) => val ? "test-ejecutado" : "test-pendiente"

    let getStatusDescriptionByVal = (val) => val ? "Ejecutado" : "Pendiente"

    let getStatusDescription = (val) => <span className={getStatusClassByVal(val)}>{getStatusDescriptionByVal(val)}</span> 

    return (
        <>
        <div>
            <h1>Tablero de ejecución de pruebas</h1>
            <br></br>
            <label>Elija un protocolo: &nbsp;</label>
            <select onChange={(e) => setTransportProtocol(e.target.value)}>
                <option value={HttpTransportType.LongPolling}>LongPolling</option>
                <option value={HttpTransportType.WebSockets}>WebSockets</option>
            </select>
            <br></br>
        </div>        
        <table class="table"> 
            <thead>
                <tr>
                    <td scope="col">
                        Test
                    </td>
                    <td scope="col">Descripcion</td>
                    <td scope="col">Accion</td>
                    <td scope="col">Estado</td>
                </tr>                
            </thead>
            <tbody>
            <tr>
                <td>Test 1</td>
                <td>Se van a enviar 1 mensajes de 10 caracteres desde la web hacia la Api.</td>
                <td><button className='btn' onClick={runTest1} >Ejecutar</button></td>                
                <td>{getStatusDescription(test1Status)}</td>
            </tr>
            <tr>
                <td>Test 2</td>
                <td>Se van a enviar 10 mensajes de 10 caracteres desde la web hacia la Api.</td>
                <td><button className='btn' onClick={runTest2} >Ejecutar</button></td>
                <td>{getStatusDescription(test2Status)}</td>
            </tr>
            <tr>
                <td>Test 3</td>
                <td>Se van a enviar 100 mensajes de 10 caracteres desde la web hacia la Api.</td>
                <td><button className='btn' onClick={runTest3} >Ejecutar</button></td>
                <td>{getStatusDescription(test3Status)}</td>
            </tr>
            <tr>
                <td>Test 4</td>
                <td>Se van a enviar 1000 mensajes de 10 caracteres desde la web hacia la Api.</td>
                <td><button className='btn' onClick={runTest4} >Ejecutar</button></td>
                <td>{getStatusDescription(test4Status)}</td>
            </tr>
            <tr>
                <td>Test 5</td>
                <td>Se van a enviar 1 mensajes de 100 caracteres desde la web hacia la Api.</td>
                <td><button className='btn' onClick={runTest5} >Ejecutar</button></td>
                <td>{getStatusDescription(test5Status)}</td>
            </tr>
            <tr>
                <td>Test 6</td>
                <td>Se van a enviar 10 mensajes de 100 caracteres desde la web hacia la Api.</td>
                <td><button className='btn' onClick={runTest6} >Ejecutar</button></td>
                <td>{getStatusDescription(test6Status)}</td>
            </tr>
            <tr>
                <td>Test 7</td>
                <td>Se van a enviar 100 mensajes de 100 caracteres desde la web hacia la Api.</td>
                <td><button className='btn' onClick={runTest7} >Ejecutar</button></td>
                <td>{getStatusDescription(test7Status)}</td>
            </tr>
            <tr>
                <td>Test 8</td>
                <td>Se van a enviar 1000 mensajes de 100 caracteres desde la web hacia la Api.</td>
                <td><button className='btn' onClick={runTest8} >Ejecutar</button></td>
                <td>{getStatusDescription(test8Status)}</td>
            </tr>
            <tr>
                <td>Test 9</td>
                <td>Se van a enviar 1 mensajes de 1000 caracteres desde la web hacia la Api.</td>
                <td><button className='btn' onClick={runTest9} >Ejecutar</button></td>
                <td>{getStatusDescription(test9Status)}</td>
            </tr>
            <tr>
                <td>Test 10</td>
                <td>Se van a enviar 10 mensajes de 1000 caracteres desde la web hacia la Api.</td>
                <td><button className='btn' onClick={runTest10} >Ejecutar</button></td>
                <td>{getStatusDescription(test10Status)}</td>
            </tr>
            <tr>
                <td>Test 11</td>
                <td>Se van a enviar 100 mensajes de 1000 caracteres desde la web hacia la Api.</td>
                <td><button className='btn' onClick={runTest11} >Ejecutar</button></td>
                <td>{getStatusDescription(test11Status)}</td>
            </tr>
            <tr>
                <td>Test 12</td>
                <td>Se van a enviar 1000 mensajes de 1000 caracteres desde la web hacia la Api.</td>
                <td><button className='btn' onClick={runTest12} >Ejecutar</button></td>
                <td>{getStatusDescription(test12Status)}</td>
            </tr>
            </tbody>
        </table>
        </>
    );
}


export default TestCommandPanel;