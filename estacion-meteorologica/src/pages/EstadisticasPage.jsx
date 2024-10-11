import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import '../styles/EstadisticasPage.css';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const EstadisticasPage = () => {
    const [labels, setLabels] = useState([]);
    const [temperaturas, setTemperaturas] = useState([]);
    const [presiones, setPresiones] = useState([]);
    const [altitudes, setAltitudes] = useState([]);
    const [velocidadesViento, setVelocidadesViento] = useState([]);

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080');

        socket.onmessage = (event) => {
            try{
                const sensorData = JSON.parse(event.data)
                const {temperatura,presion, altitud, velocidadViento} = sensorData

                setLabels((prevLabels) => [...prevLabels, new Date().toLocaleTimeString()]);
                setTemperaturas((prevTemps) => [...prevTemps, temperatura]);
                setPresiones((prevPresiones) => [...prevPresiones, presion]);
                setAltitudes((prevAltitudes) => [...prevAltitudes, altitud]);
                setVelocidadesViento((prevViento) => [...prevViento, velocidadViento]);
      
            } catch (error) {
                console.log('Error datos', error)
            }
      };

        return () => {
            socket.close();
        };
    }, []);

    const datosTemperatura = {
        labels: labels,
        datasets: [
            {
                label: 'Temperatura (°C)',
                data: temperaturas,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: true,
            },
        ],
    };

    const datosPresion = {
        labels: labels,
        datasets: [
            {
                label: 'Presión Atmosférica (hPa)',
                data: presiones,
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
            },
        ],
    };

    const datosAltitud = {
        labels: labels,
        datasets: [
            {
                label: 'Altitud (m)',
                data: altitudes,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    };

    const datosVelocidadViento = {
        labels: labels,
        datasets: [
            {
                label: 'Velocidad del Viento (m/s)',
                data: velocidadesViento,
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: true,
            },
        ],
    };

    return (
        <div className="estadisticas-container">
            <h1>Estadísticas Meteorológicas</h1>

            {/* Grid para mostrar 2 gráficos por fila */}
            <div className="graficos-grid">
                <div className="estadistica-grafico">
                    <h2>Temperatura</h2>
                    <div className="line-chart">
                        <Line data={datosTemperatura} />
                    </div>
                </div>

                <div className="estadistica-grafico">
                    <h2>Presión Atmosférica</h2>
                    <div className="line-chart">
                        <Line data={datosPresion} />
                    </div>
                </div>

                <div className="estadistica-grafico">
                    <h2>Altitud</h2>
                    <div className="line-chart">
                        <Line data={datosAltitud} />
                    </div>
                </div>

                <div className="estadistica-grafico">
                    <h2>Velocidad del Viento</h2>
                    <div className="line-chart">
                        <Line data={datosVelocidadViento} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstadisticasPage;