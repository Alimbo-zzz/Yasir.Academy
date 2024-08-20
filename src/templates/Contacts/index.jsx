import React from 'react';
import cls from './style.module.scss'
import clx from 'classnames'
import { DecoreBlur } from '@/components';
import MainIcon from '@mui/icons-material/EmailOutlined';
import PhoneIcon from '@mui/icons-material/PhoneOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { ScrollAnimate } from '@/contexts';
import { format, media } from '@/scripts';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default ({className}) => {
	const {phone, telegram, mail} = media;
	
	const notify = (message='') => {
		toast(message, {
			className: cls.toast,
			progressClassName: cls.toast__progress,
			position: "top-right",
			autoClose: 1000,
      closeOnClick: true,
      closeButton: false,
			theme: "dark",
			type: 'message'
		});

	};


	return (<>
		<div id='contacts' container='' className={clx(cls.wrap, className)}>
			<ScrollAnimate><h2 data-title='Контакты'>Свяжитесь с нами</h2></ScrollAnimate>
			<DecoreBlur t='50%' l='0' translate='-50% -50%'/>
			<ScrollAnimate delay={200} className={cls.content}>
				<h3>Контактная информация</h3>
				<p>У вас есть вопросы или вам нужна помощь? Свяжитесь с нами, любым удобным для вас способом:</p>
				<hr />
				<ul className={cls.list}>
					<div className={cls.list__item}  >
						<a target='_blank' href={`mailto:${mail}`} data-icon='mail'><MainIcon/></a>
						<CopyToClipboard text={mail}>
							<button onClick={() => notify('Почта скопирована')} data-value>{mail}</button>
						</CopyToClipboard>
					</div>
					<div className={cls.list__item} >
						<a target='_blank' href={`tel:${phone}`} data-icon='phone'><PhoneIcon/></a>
						<CopyToClipboard text={phone}>
							<button onClick={() => notify('Номер скопирован')} data-value>{format.phone(phone)}</button>
						</CopyToClipboard>
					</div>
				</ul>
				<ul className={cls.socials}>
					<a className={cls.socials__item} href={telegram} >
						<TelegramIcon/>
					</a>
					<a className={cls.socials__item} href={`https://wa.me/${phone}`} >
						<WhatsAppIcon/>
					</a>
				</ul>
			</ScrollAnimate>
		</div>
		<ToastContainer />
	</>);
}
