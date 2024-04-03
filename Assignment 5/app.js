let express = require('express');
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
//const mongoUrl = "localhost:27017";
//const mongoUrl = "mongodb+srv://local:test12345@cluster0.f8vmc.mongodb.net/augintern?retryWrites=true&w=majority";
const mongoUrl= "mongodb+srv://test:test123@cluster0.uy8eapv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
const cors = require('cors')

let port = process.env.PORT || 7887
let db; // Declare db variable

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("welcome to express")
});

app.get('/location', (req, res) => {
    // Ensure db is initialized before accessing
    if (db) {
        db.collection('location').find().toArray((err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } else {
        res.status(500).send("Database connection not established");
    }
});

MongoClient.connect(mongoUrl, { useUnifiedTopology: true }, (err, connection) => {
    if (err) {
        console.log('error while connecting');
    } else {
        db = connection.db('Mydata'); // Use connection object to access db
        app.listen(port, () => {
            console.log(`listening to port no ${port}`);
        })
    }
})