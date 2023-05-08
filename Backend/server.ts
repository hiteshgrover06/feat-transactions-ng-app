const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: false})); // support encoded bodies

app.get('/', (req: any, res: any) => {
  console.log(req.body);
  console.log('status success');
  res.send('OK');
});

app.get('/api/transactions', (req: any, res: any) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.send(require('./transactions.json'));
});

app.listen(8080, () => {
  console.log('Express app listening on port 8080!');
});
