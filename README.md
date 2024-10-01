# estacion-meteorologica
 Practica Unidad 3 de Xenia. Estacion de clima desarrollada con arduino y frontend en Vite-React

# Carpeta ServidorClima
instalar dentro de la carpeta:
 - npm install
 - npm instal ws
 - npm install serialport
 - npm install @serialport/parser-readline

Esta carpeta contiene el archivo "servidor.js" el cual realiza la conexion entre arduino y el ordenador mediante el puerto de conexión "/dev/tty.usbserial-110" que debera ser cambiado para cada ordenador segun sea necesario. Tambien crea un servidor WebSocket para que todos los clientes que se conecten a la red local creada por el servidor puedan observar los datos enviados por el serial.

# Carpeta estacion-meteorologica
instalar dentro de la carpeta:
- npm install
- npm ws

Esta carpeta establece la conexion entre el servidor WebSocket del archivo "servidor.js" y almacena la informacion en un hook useState para posteriormente poder llamarla segun sea necesario dentro de nuestro componente.

const socket.onmessage = (event) Aqui se valida si se esta recibiendo un mensaje del servidor y utiliza a 'event' como un estado de validación que reconoce que se a cargado un mensaje por lo que se actualzia el estado en data.