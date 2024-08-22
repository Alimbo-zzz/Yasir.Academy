import React, { useEffect, useState } from 'react';
import cls from './style.module.scss'
import { useLocation, useParams } from 'react-router-dom';
import { Button } from '@/ui';
import { DecoreBlur } from '@/components';
import './form.scss';
import { Animate } from '@/contexts';
import { format, media } from '@/scripts';
import { Pay } from '..';

	
const pricelist = [
	{
		value: 'main',
		animate: 'fadeInLeft',
		title: 'Основной',
		desc: 'Идеально подходит для кто только начинает свой путь в кодировании.',
		price: 30000,
		theme: 'light',
		list: ['Полный доступ к курсу', 'Личное наставничество', 'Доступ к учебной платформе', 'Работа над проектами', 'Поддержка сообщества', 'Обратная связь по проектам', 'Все модули и задания']
	},
	{
		value: 'budget',
		animate: 'fadeInRight',
		title: 'Бюджетный',
		desc: 'Хорошо подойдёт тем, кто любит изучать всё самостоятельно.',
		price: 15000,
		list: ['Полный доступ к курсу', 'Доступ к учебной платформе', 'Поддержка сообщества', 'Обратная связь по проектам', 'Все модули и задания']
	},
]

export default (props) => {
	const [valid, setValid] = useState(false);
	const location = useLocation();
	const [data, setData] = useState({})

	
	useEffect(()=>{
		let params = location.search.slice(1).split('&').map(el => el.split('='));
		let value = params.find(el => el[0] == 'value')[1]
		const findData = pricelist.find(el => el.value == value);
		setData(findData)
	}, [location.search])



	const sendReq = async (e) => {
		e.preventDefault();
			
		let body = JSON.stringify({
				"EmailCompany": media.mail,
				"Taxation": "patent",
				"FfdVersion": "1.2",
				"Items": [
						{
								"Name": "Основы веб-разработки | тариф основной" || "Оплата",
								"Price": data.price + '00',
								"Quantity": 1.00,
								"Amount": data.price + '00',
								"PaymentMethod": "full_prepayment",
								"PaymentObject": "service",
								"Tax": "none",
								"MeasurementUnit": "pc"
						}
				]
		});

		const  req = await fetch("https://securepay.tinkoff.ru/v2/", {method: 'POST', body, headers: {'Content-Type': 'application/json'}})
		const req_data = req.json();
		console.log(req_data)

	}
	
	return (<>
		<Animate  className={cls.wrap}>
			<DecoreBlur t='0' r='0' />
			<div container='' className={cls.cont}>
				<h2>Основы веб-разработки</h2>
				<form onSubmit={sendReq} className={cls.form}>
					<h3>Тариф "{data?.title}"</h3>
					<h3>{format.price(data?.price, '.')}₽</h3>
					<input required className="payform-tinkoff-row" type="text" placeholder="ФИО плательщика" name="name"/>
					<input required className="payform-tinkoff-row" type="email" placeholder="E-mail" name="email"/>
					<input required className="payform-tinkoff-row" type="tel" placeholder="Контактный телефон" name="phone"/>
					<div className={cls.box}>
						<input type="checkbox" required/> 
						<p>я согласен с <a href="/offer">условиями оферты</a> и <a href="/privacy-policy">политикой конфидециальности</a> сайта</p>
					</div>
					<Button type='submit' disabled={valid}>оплатить</Button>
				</form>
			</div>
		</Animate>
	</>);
}
