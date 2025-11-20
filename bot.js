const { createClient } = require("xbox-bedrock-protocol");

const client = createClient({
  host: process.env.MC_HOST,
  port: parseInt(process.env.MC_PORT),
  username: process.env.MC_EMAIL,
  password: process.env.MC_PASSWORD,
  version: "1.21.123.2"
});

client.on("join", () => {
  console.log("Bot berhasil masuk ke server!");
});

// Anti AFK
setInterval(() => {
  client.move(0, 0, 0);
}, 5000);

client.on("text", (msg) => {
  console.log("[CHAT]", msg.source_name, ":", msg.message);
});
