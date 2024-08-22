const multer = require('multer');
const moment = require('moment');
const path = require('path');

const filetypes = /jpeg|jpg|png|gif|svg|pdf|doc|zip|xls|word|excel|docx|xlsx/;



const storage = multer.diskStorage({
	destination(req, file, cb){
		cb(null, path.resolve(__dirname, '../uploads/'));
	},
	filename(req, file, cb){
		const date = moment().format('DDMMYYYY-HHmmss_SSS');
		let filename = `${date}-${file.originalname}`;
		cb(null, filename);
	}
})


const fileFilter = (req, file, cb) => {
	// Check ext
	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	// Check mime
	const mimetype = filetypes.test(file.mimetype);

	if(mimetype && extname) cb(null, true);
	else cb(null, false);
}


const limits = {
	fileSize: 1024 * 1024 * 5,
}


module.exports = multer({
	storage, fileFilter, limits
})
