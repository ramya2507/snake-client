const handlerUserInput = function(key) {
  //to check ctrl+c
  if(key === '\u0003'){
    process.exit();
  }
}
// SetUp User Interface
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data' , data => handlerUserInput(data));
  return stdin;
}

module.exports = setupInput;