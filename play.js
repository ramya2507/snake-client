const { connect } = require('./client');
const { setupInput } = require('./input');
console.log("Connecting....");

let tcpConnection = connect();

setupInput(tcpConnection);

