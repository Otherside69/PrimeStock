const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Cliente conectado');

  ws.on('message', (message) => {
    console.log(`Mensagem recebida: ${message}`);
  });

  ws.on('close', () => {
    console.log('Cliente desconectado');
  });
});
