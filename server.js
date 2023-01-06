const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Hello Express Server');
});

app.get('/greet', (req, res)=> {
    res.send("Hello World !");
});


app.get("/chocolate", function (req, res) {
    res.send("Mm chocolate :O");
  });

app.get("/node", function (req, res) {
    res.send("Yay Node!");
  });

app.get("/migracode", function (req, res) {
    res.send("Hi, I am a student of Migracode.");
  });

app.get('/search', (req, res)=>{
    let params = req.query;
    res.send(`You searched for ${JSON.stringify(params)}`);
});

app.get('/find', (req, res)=>{
    let keyword = req.query.keyword;
    res.send(`You searched for ${keyword}`);
});

app.listen(3000, ()=> console.log("Server is up and running"));