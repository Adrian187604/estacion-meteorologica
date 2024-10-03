import React, { useEffect, useState } from "react";
import '../styles/estacion.css';

const Estacion = () => {
    const [data, setData] = useState('');
    const [horaDelDia, setHoraDelDia] = useState('');

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080')

        setHoraDelDia(obtenerHoraDelDia());

        socket.onmessage = (event) => {
            const datos = event.data.split(' ');
            const temperatura = datos[1];
            const presion = datos[4];
            setData({ temperatura, presion });
            console.log('Datos enviados!');
        };

        return () => {
            socket.close();
        };
    }, []);

    const obtenerHoraDelDia = () => {
        const hora = new Date().getHours();
        if (hora >= 5 && hora < 8) return 'Amanecer';
        if (hora >= 8 && hora < 12) return 'Mañana';
        if (hora >= 12 && hora < 16) return 'Día';
        if (hora >= 16 && hora < 19) return 'Atardecer';
        if (hora >= 19 && hora < 21) return 'Anochecer';
        return 'Noche';
    };



    const ColorFondo = () => {
        switch (horaDelDia) {
            case 'Amanecer': return '#FFDAB9';
            case 'Mañana': return '#87CEEB';
            case 'Día': return '#00BFFF';
            case 'Atardecer': return '#FF4500';
            case 'Anochecer': return '#8A2BE2';
            case 'Noche': return '#191970';
            default: return '#FFFFFF';
        }
    };

    return (
        <div className="container">
            {/* Contenedor superior */}
            <div className="superior" style={{ backgroundColor: ColorFondo() }}>
                <div className="momento-dia">
                    <p>{horaDelDia}</p>
                    <p className="hora">{new Date().toLocaleTimeString()}</p>
                </div>
                <div className="fecha">
                    <h2>{new Date().toLocaleDateString()}</h2>
                </div>
            </div>

            {/* Contenedor inferior */}
            <div className="inferior">
                <h1 className="titulo">Estación Meteorológica</h1>
                <div className="datos">
                    <div className="dato">
                        <h2>Temperatura:</h2>
                        <p>{data.temperatura} °C</p>
                    </div>
                    <div className="dato">
                        <h2>Presión Atmosférica:</h2>
                        <p>{data.presion} Pa</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Estacion;
