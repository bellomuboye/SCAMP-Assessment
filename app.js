const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route');
const app = express();

const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://bell:TheBells2001@fullstack-1.xvzz2.mongodb.net/scamp?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

app.use('/products', product);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



let port = 1234;

app.listen(port, ()=> {
	console.log('server listening in ' + port);
});