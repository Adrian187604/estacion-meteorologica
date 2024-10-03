import React, { useEffect, useState } from "react";

const Estacion = () => {
    const [data, setData] = useState('')
    const [horaDelDia, setHoraDelDia] = useState("");

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

    // Cambiar el color de fondo dependiendo de la hora
    useEffect(() => {
        const horaActual = new Date().getHours();

        if (horaActual >= 6 && horaActual < 12) {
            setHoraDelDia("amanecer");
        } else if (horaActual >= 12 && horaActual < 18) {
            setHoraDelDia("medio dia");
        } else if (horaActual >= 18 && horaActual < 20) {
            setHoraDelDia("atardecer");
        } else {
            setHoraDelDia("anochecer");
        }
    }, []);

    const ColorFondo = () => {
        switch (horaDelDia) {
            case "amanecer":
                return "#FFDDC1";  // Naranja claro
            case "medio dia":
                return "#87CEEB";  // Azul cielo
            case "atardecer":
                return "#FF4500";  // Naranja oscuro
            case "anochecer":
                return "#2C3E50";  // Azul oscuro
            default:
                return "#333";     // Por defecto, un color oscuro
        }
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '100vh',
        }}>

            <div style={{
                height: '50vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                backgroundColor: ColorFondo(),
                fontSize: '24px'

            }}>
                <p>Momento del día: {horaDelDia.charAt(0).toUpperCase() + horaDelDia.slice(1)}</p>
            </div>



            {/* Datos de la estación meteorológica */}
            <div style={{
                height: '50vh',
                width: '100%',
                textAlign: 'center',
            }}>
                <h1>Estación Meteorológica</h1>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                    <div style={{
                        flex: 1,
                        borderRight: '1px solid white',
                        padding: '20px'
                    }}>
                        <h2>Temperatura: </h2>
                        <h2>{data.temperatura} °C</h2>
                    </div>
                    <div style={{
                        flex: 1,
                        padding: '20px'
                    }}>
                        <h2>Presión Atmosférica: </h2>
                        <h2>{data.presion} Pa</h2>
                    </div>
                </div>
                <h2>Fecha: {new Date().toLocaleDateString()} </h2>
                <h2>Hora: {new Date().toLocaleTimeString()}</h2>

            </div>


        </div>
    );
}


export default Estacion