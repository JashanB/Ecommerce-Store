const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// place holder for the data
const users = [];
const fetch = require("node-fetch");
app.use(bodyParser.json());

app.get('/api/store', (req, res) => {
  // console.log('api/users called!!!!')
  // res.json(users);
   fetch('https://fakestoreapi.com/products')
   .then(res=>res.json())
   .then(json=>{
     console.log(json)
     for (i = 0; i < json.length; i++) {
       console.log(json[i])
     }
    })
});

app.post('/api/store', (req, res) => {
  // const user = req.body.user;
  // console.log('Adding user::::::::', user);
  // users.push(user);
  // res.json("user addedd");
  // axios.get('https://fakestoreapi.com/products')
    // .then(res => {
    //   console.log(res.data)
    // })
});

app.get('/', (req,res) => {
    res.send('App Works !!!!');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});