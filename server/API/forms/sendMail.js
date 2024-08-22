const nodemailer = require("nodemailer");
const {setMailHTML} = require("./setMailHTML");
require('dotenv').config(); // безопасность
const {EMAIL_USER, EMAIL_PASSWORD } = process.env;

// ______mailer
const transporter = nodemailer.createTransport({
	service: 'Yandex',
	auth:{
		user: EMAIL_USER,
		pass: EMAIL_PASSWORD
	},
	tls:{
		rejectUnauthorized: false
	}
})


const sendMail = (req, res)=>{
	const {body} = req;
	var data = body;
	var file = req?.file;
	var attachments = [];
	if(body?.data) data = JSON.parse(body.data);

	if(file) {
		let obj = {
			filename: file.originalname,
			path: file.path
		};
		attachments.push(obj);
	}

	const html = setMailHTML(data);

	const mail_options = {
		from: EMAIL_USER,
		to: EMAIL_USER,    // кому отправить
		subject: `HedgehogTech (${body.type})`,
		html: html,
		attachments,
	}

	transporter.sendMail(mail_options, err=>{
		if(err) {
			res.status(200).json({"status": "error"});
			console.log('EMAIL sent error');
			console.log(err);
		}
		else {
			res.status(200).json({"status": "success"});
			console.log('EMAIL sent success');
		}
	})

}



module.exports = {
	sendMail
}
