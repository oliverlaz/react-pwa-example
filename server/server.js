const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/data/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', req.params[0] + '.json'));
});

console.log('server started, listening...');

app.listen(9000);