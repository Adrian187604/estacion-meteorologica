import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const icon = L.icon({
    iconUrl: 'https://img.icons8.com/?size=100&id=13800&format=png&color=000000', 
    iconSize: [25, 30], 
    iconAnchor: [12, 41], 
    popupAnchor: [1, -34],
});

const HomePage = () => {
    const position = [31.867, -116.598];

    return (
        <div>
        <MapContainer center={position} zoom={13} style={{ height: '600px', width: '600px',  }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position} icon={icon}>
                    <Popup>
                        Estación Meteorológica. <br /> Ensenada, Baja California.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default HomePage;
