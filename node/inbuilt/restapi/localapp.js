let express = require('express');
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongoUrl = "mongodb://localhost:27017";
const dotenv = require('dotenv')
dotenv.config()
let port = process.env.PORT || 8200;
var db;

app.get('/',(req,res) => {
  res.send("Welcome to express")
})

app.get('/hotels',(req,res) => {
  db.collection('hotels').find().toArray((err,result) =>{
      if(err) throw err;
      res.send(result)
  })
})

MongoClient.connect(mongoUrl, { useUnifiedTopology: true }, (err,connection) => {
  if(err) console.log("Error While Connecting");
  db = connection.db('hotels');
  app.listen(port, () => {
    console.log(`listening to  port no ${port}`)
  })
})
