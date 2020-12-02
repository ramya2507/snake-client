const net = require('net');
const { IP, PORT } = require('./constants');
//Establishes connection with game server
const connect =function (){
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8');
  conn.on('connect',() =>{
    console.log("Successfully connected to game server");
    conn.write("Name: RUM");
    conn.write("Say: You can do it!");
  });
 /* conn.on('data',(data) => {
    console.log("Server says: ",data);
  });*/
  conn.on('close', ()=> {
    console.log('you ded cuz you idled')
  })
  return conn;
};


module.exports = { connect };