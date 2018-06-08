const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/database');
const path = require('path');
const authentication = require('./routes/authentication')(router);
const blog = require('./routes/blogs')(router);
const port = process.env.PORT || 8080;

mongoose.connect(config.uri, (err) => {
	if(err){
		console.log('Could not connect to database' + err);
	}else{
		console.log('Connected to database: '+config.db);
	}
});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static(__dirname + '/public'));
app.use('/authentication', authentication);
app.use('/blogs', blog);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, (err) => {
	if(err) console.log(err);
	console.log('Listening on Port 8080');
});