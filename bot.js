const mc = require('bedrock-protocol');

const client = mc.createClient({
  host: process.env.MC_HOST,       // IP server
  port: parseInt(process.env.MC_PORT), // Port server
  username: process.env.MC_EMAIL,  // Email Microsoft
  password: process.env.MC_PASSWORD,
  version: '1.21.123.2'            // versi MCPE
});

// Log status
client.on('login', () => {
  console.log("Bot berhasil login!");
});

// Anti AFK
setInterval(() => {
  client.queue('move_player', {
    position: { x: 0, y: 80, z: 0 },
    yaw: 0,
    pitch: 0,
    head_yaw: 0,
    mode: 0,
    on_ground: true,
    ridden_entity_runtime_id: 0,
    teleportation_cause: 0,
    entity_type: 0,
    tick: 0
  });
}, 6000);

// Tampilkan chat server
client.on('text', (packet) => {
  console.log(`[CHAT] ${packet.source_name}: ${packet.message}`);
});
