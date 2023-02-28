
const bodyParser = require("body-parser")
const express = require('express');
const app = express();
const port = 3000;
const bca = require('./module');

const config = require('config');

const username = config.get('akun.username'); // 
const password = config.get('akun.password'); // 

// parse application/json
app.use(bodyParser.json());



app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/bca/balance', (req, res) => {
    bca
        .getBalance(username, password)
        .then(data => {
          res.send(JSON.stringify(data));
        })
        .catch(err => {
            // console.log('error ', err);
            
            res.send(JSON.stringify(err));
        });
  });
  
app.get('/bca/trxlast', (req, res) => {
    

    bca
        .getSettlementLast(username, password)
        .then(data => {
          res.send(JSON.stringify(data));
        })
        .catch(err => {
            console.log('error ', err);
            
            res.send(JSON.stringify(err));
        });
  });
   
app.get('/bca/trx*', (req, res) => {
    const tglawal = req.query['tglawal'];
    const blnawal = req.query['blnawal'];
    const thnawal = req.query['thnawal'];
    const tglakhir = req.query['tglakhir'];
    const blnakhir = req.query['blnakhir'];
    const thnakhir = req.query['thnakhir'];

    bca
        .getSettlement(username, password,tglawal,blnawal,thnawal,tglakhir,blnakhir,thnakhir)
        .then(data => {
          res.send(JSON.stringify(data));
        })
        .catch(err => {
            console.log('error ', err);
            
            res.send(JSON.stringify(err));
        });
  });
 
app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});