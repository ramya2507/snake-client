const net = require('net');
//Establishes connection with game server
const connect = function (){
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });
  conn.setEncoding('utf8');
  conn.on('connect',() =>{
    console.log("Successfully connected to game server");
    conn.write("Name: RUM");
    //conn.write("Move: up");
  });
  conn.on('data',(data) => {
    console.log("Server says: ",data);
  });
  return conn;
}

module.exports = connect;