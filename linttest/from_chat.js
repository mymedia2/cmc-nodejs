const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

function doStuff(input) {
  const content = fs.readFileAsync(input, 'utf8');
  const data = JSON.parse(content);
  let x = fs.readFileAsync(data.in);
  x = parseInt(x, 10) * 2 + '!\n';
  fs.writeFile(data.out, x);
  return 'Done!';
}

doStuff('data.json')
  .then(console.log)
  .catch(err => console.error('Error: ', err));
