const mc = require('bedrock-protocol');

const client = mc.createClient({
  host: process.env.MC_HOST,
  port: parseInt(process.env.MC_PORT),
  username: process.env.MC_EMAIL,
  offline: false, 
  password: process.env.MC_PASSWORD,
  version: "1.21.90"
});

client.on("login", () => {
  console.log("Bot berhasil login!");
});

// Simple anti-AFK
setInterval(() => {
  client.write("move_player", {
    runtime_id: client._runtimeEntityId,
    position: { x: 0, y: 0, z: 0 },
    pitch: 0,
    head_yaw: 0,
    yaw: 0,
    mode: 0,
    on_ground: true,
    riding_eid: 0,
    teleportation_cause: 0,
    entity_type: 0
  });
}, 5000);

client.on("text", (packet) => {
  console.log(`[CHAT] ${packet.source_name}: ${packet.message}`);
});
