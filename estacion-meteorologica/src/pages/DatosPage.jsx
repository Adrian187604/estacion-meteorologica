import React, { useEffect, useState } from "react";
import '../styles/Estacion.css';

const Estacion = () => {
    const [data, setData] = useState({ 
        temperatura: '', 
        presion: '', 
        altitud: '', 
        velocidadViento: '' 
    });
    const [horaDelDia, setHoraDelDia] = useState('');

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080');

        setHoraDelDia(obtenerHoraDelDia());

        socket.onmessage = (event) => {
            try {
                const sensorData = JSON.parse(event.data);
                const { temperatura, presion, altitud, velocidadViento } = sensorData;
                setData({ temperatura, presion, altitud, velocidadViento });
            } catch (error) {
                console.error('Error al recibir los datos:', error);
            }
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
        <div className="container-estacion">
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
                    <div className="dato">
                        <h2>Altitud:</h2>
                        <p>{data.altitud} m</p>
                    </div>
                    <div className="dato">
                        <h2>Velocidad del viento:</h2>
                        <p>{data.velocidadViento} m/s</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Estacion;
