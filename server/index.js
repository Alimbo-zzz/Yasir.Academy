const express = require('express');
const config = require('config');
const morgan = require('morgan');
const router = require('./routes.js');
const api = require('./API');
const path = require('path');
const opn = require('opn');

// const bodyParser = require('body-parser');
// const fileUpload = require('express-fileupload');

var server_started = false;
const app = express();
const PORT = config.get('port') || 3030;


app.use('/', express.static( path.resolve(__dirname, 'Front-end') ) ); // путь для всех элементов
app.use(morgan(':method :url :status :res[content-length] :response-time ms')); // выведение в консоль всех запросов
app.use(express.json());  // позволяет получать json-files
// app.use(bodyParser());
// app.use(fileUpload({}));
app.use(express.urlencoded({extended: false})); // middle var - позволяет принимать body в запросах
app.use(api); // API
app.use(router); // roter






// start server
app.listen(PORT, (err)=>{
	let server_url = `http://localhost:${PORT}`;
	if(err){
		console.log(err);
	}else{
		console.log(`Server URL: ${server_url}`);
	}
})
