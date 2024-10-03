import React, { useEffect, useState } from "react";

const Estacion = () => {
    const [data, setData] = useState('')

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080')

        socket.onmessage = (event) => {
            const datos = event.data.split(' ');
            const temperatura = datos[1];
            const presion = datos[4];
            setData({ temperatura, presion });
            console.log('Datos enviados!');
        };

    }, [])


    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <h1 style={{
                color: '#333'
            }}>Estación Meteorologica</h1>

            <h2>Temperatura: </h2>

            <h2>Presion Atmosferica: </h2>

            <p>Datos: {data}</p>

        </div>


    )

}

export default Estacion