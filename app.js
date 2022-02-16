const express = require('express')
const db = require('./db')
const app = express()
const port = 8088
const bodyParser = require("body-parser");
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
// Get route with name districts that returns  city districts sent with state_id
app.get('/hello', (req, res) => {
  res.send('Hello World! to  ');
});
app.get('/eldor', (req, res) => {
    res.send('Hello Eldor! World 1 ');
  });

// GET
app.get('/countries', async (req, res) => {

    console.log("GET /countries");
    try {
        const result = await db.pool.query("select * from countries");
        res.send(result);
    } catch (err) {
        res.status(400).send(new Error('description'));
    }
});
app.get('/states', async (req, res) => {

    console.log("GET /countries");
    try {
        const result = await db.pool.query("select * from states where country_id = ?", [req.query.countryid]);
        res.send(result);
    } catch (err) {
        res.status(400).send(new Error('description'));
    }
});

app.get('/cities', async (req, res) => {

    console.log("GET /cities");
    try {
        const result = await db.pool.query("select * from cities where state_id = ?", [req.query.state]);
        res.send(result);
    } catch (err) {
        res.status(400).send(new Error('description'));
    }
});


  
  
  
 
app.listen(port, () => console.log(`Listening on port ${port}`));