let express = require('express');
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
//const mongoUrl = "mongodb://localhost:27017";
//const mongoUrl = "mongodb+srv://local:test12345@cluster0.f8vmc.mongodb.net/augintern?retryWrites=true&w=majority"
const mongoUrl="mongodb+srv://tetali:<tetali123>@cluster0.uy8eapv.mongodb.net/Movies?retryWrites=true&w=majority&appName=Cluster0"
const dotenv = require('dotenv')
dotenv.config()
let port = process.env.PORT || 8200;
var db;

app.get('/',(req,res) => {
  res.send("Welcome to express")
})


app.get('/hotels',(req,res) => {
  db.collection('Telugu').find().toArray((err,result) =>{
      if(err) throw err;
      res.send(result)
  })
})

 MongoClient.connect(mongoUrl, (err,client) => {
          if(err) console.log("Error While Connecting");
            db = connection.db('Movies');
                app.listen(port,( )=>{
                  console.log(`listening to  port no ${port}`)
  })
})





