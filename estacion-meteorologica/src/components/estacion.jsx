import React, { useEffect, useState } from "react";

const Estacion = () => {
const [data, setData] = useState('')

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080')

        socket.onmessage = (event) => {
            setData(event.data)
            console.log('Datos enviados!')
        }
        return () => {
            socket.close()
        }

    }, [])


    return(
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