const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const { WebSocket } = require('ws')

const wss = new WebSocket.Server({ port:8080 })

const port = new SerialPort({
  path: '/dev/tty.usbserial-110',
  baudRate: 9600
})

const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }))

parser.on('data', (data) => {
  console.log(`Datos recibidos: ${data}`)
  wss.clients.forEach(client => {
    if(client.readyState === WebSocket.OPEN) {
        client.send(data)
    }
  })
})

port.on('error', (err) => {
  console.error('Error en el puerto serial: ', err.message)
})
