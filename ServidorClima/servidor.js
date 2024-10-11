const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const { WebSocket } = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

const port = new SerialPort({
  path: '/dev/tty.usbserial-1120',
  baudRate: 9600
});

const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

port.on('error', (err) => {
  console.error('Error en el puerto serie: ', err.message);
});

wss.on('connection', (ws) => {
  console.log('Cliente conectado');

  parser.on('data', (data) => {
    console.log(`Datos recibidos: ${data}`);
    try {
      const sensorData = JSON.parse(data);
      ws.send(JSON.stringify(sensorData));
    } catch (e) {
      console.log('Error al parsear JSON: ', e);
    }
  });

  ws.on('close', () => {
    console.log('Cliente desconectado');
  });
});
