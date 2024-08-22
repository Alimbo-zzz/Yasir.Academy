const express = require('express');
const router = express.Router();
const app = express();
app.use(express.urlencoded({extended: false})); // middle var - позволяет принимать body в запросах
// ________
const {sendMail} = require('./forms');
const upload = require('../middleware/upload');


// POST
router.post('/api/contacts', (req,res) => sendMail(req, res));
router.post('/api/order', upload.single('file'), (req,res) => sendMail(req, res));

module.exports = router
