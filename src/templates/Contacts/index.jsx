import React from 'react';
import cls from './style.module.scss'
import clx from 'classnames'
import { DecoreBlur } from '@/components';
import MainIcon from '@mui/icons-material/EmailOutlined';
import PhoneIcon from '@mui/icons-material/PhoneOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { ScrollAnimate } from '@/contexts';

export default ({className}) => {
	
	return (<>
		<div id='contacts' container='' className={clx(cls.wrap, className)}>
			<ScrollAnimate><h2 data-title='Контакты'>Свяжитесь с нами</h2></ScrollAnimate>
			<DecoreBlur t='50%' l='0' translate='-50% -50%'/>
			<ScrollAnimate delay={200} className={cls.content}>
				<h3>Контактная информация</h3>
				<p>У вас есть вопросы или вам нужна помощь? Свяжитесь с нами, любым удобным для вас способом:</p>
				<hr />
				<ul className={cls.list}>
					<a className={cls.list__item} target='_blank' href='mailto:alimbo333@gmail.com' >
						<div data-icon='mail'><MainIcon/></div>
						<div data-value>alimbo333@gmail.com</div>
					</a>
					<a className={cls.list__item} target='_blank' href='tel:+79994921293' >
						<div data-icon='phone'><PhoneIcon/></div>
						<div data-value>{"+7 (999) 492 12-93"}</div>
					</a>
				</ul>
				<ul className={cls.socials}>
					<a className={cls.socials__item} href='https://t.me/Alim_bo' >
						<TelegramIcon/>
					</a>
					<a className={cls.socials__item} href='https://wa.me/+79994921293' >
						<WhatsAppIcon/>
					</a>
				</ul>
			</ScrollAnimate>
		</div>
	</>);
}
