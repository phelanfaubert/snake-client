const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    IP,
    PORT,
  });
 
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server")
    conn.write('Name: PJF');
  });
  conn.on("data", (messageFromServer) => {
    console.log(messageFromServer);
  });


  return conn;
};


module.exports = { connect };