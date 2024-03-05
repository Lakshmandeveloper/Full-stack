let express= require('express');
let app= express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongoUrl = "mongodb://localhost:27017"
const dotenv = require('dotenv')
dotenv.config()
let port= process.env.PORT || 6788;
var db;


app.get('/', (req, res) =>{
          res.send('WELCOME TO EXPRESS.JS')
})

app.get('/hostel',(req,res) =>{
     db.collection('hostels').find( ).toArray((err,result)=>{
      if (err) throw err;
      res.send(result)
     })

})
MongoClient.connect(mongoUrl, (err,connection) =>{
  if(err) console.log('error while connecting');
  db = connection.db('hostels');

app.listen(port,( ) =>{
  console.log(`listening to  the port ${port}`)
})
})

