const mc = require('minecraft-protocol');

// Ambil data dari Environment Variables
const client = mc.createClient({
  host: process.env.MC_HOST || '127.0.0.1',     
  port: parseInt(process.env.MC_PORT) || 19132, 
  username: process.env.MC_USERNAME || 'razorgaming32',
  version: process.env.MC_VERSION || 'bedrock_1.21.90'
});

client.on('login', () => console.log('Bot AFK sudah login!'));
client.on('spawn', () => console.log('Bot sudah spawn di server!'));

// Loop AFK supaya bot tetap online
setInterval(() => {
  client.write('move', { x: 0, y: 0, z: 0 });
}, 5000);

// Tangani disconnect / error
client.on('disconnect', (packet) => console.log('Terdisconnect:', packet));
client.on('error', (err) => console.error('Error bot:', err));

// Optional: chat random supaya bot terlihat aktif
setInterval(() => {
  if (client && client.write) {
    const messages = ['farm xp pw fxp', 'Hello', 'a'];
    const msg = messages[Math.floor(Math.random() * messages.length)];
    client.write('text', { message: msg });
  }
}, 60000);
