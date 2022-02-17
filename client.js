const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server")
  });
  conn.on("data", (messageFromServer) => {
    console.log(messageFromServer);
  });
  // conn.on('connect', () => {
  //   conn.write('Name: PJF');
  // });
  conn.on('connect', () => {
    conn.write('Move: up');
  });

  return conn;
};


module.exports = {connect};