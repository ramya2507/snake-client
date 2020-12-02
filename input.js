
let connection;

const handlerUserInput = function(key) {
  //to check ctrl+c
  if(key === '\u0003'){
    process.exit();
  } 
  switch(key){
    case 'w':
      connection.write('Move: up');
    break;
    case 'a':
      connection.write('Move: left');
    break;
    case 's':
      connection.write('Move: down');
    break;
    case 'd':
      connection.write('Move: right');
    break;
  }
  
}
// SetUp User Interface
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  //connection.write("Move: up")
  stdin.on('data' , (data) => handlerUserInput(data));
  return stdin;
}

module.exports = { setupInput };