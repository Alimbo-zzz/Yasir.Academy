import React from 'react';
import cls from './style.module.scss'
import clx from 'classnames'
import { ScrollAnimate } from '@/contexts';
import { DecoreBlur, PriceItem } from '@/components';



export default ({className}) => {
	

	const pricelist = [
		{
			animate: 'fadeInLeft',
			title: 'Основной',
			desc: 'Идеально подходит для кто только начинает свой путь в кодировании.',
			price: 30000,
			theme: 'light',
			href: '',
			list: ['Полный доступ к курсу', 'Личное наставничество', 'Доступ к учебной платформе', 'Работа над проектами', 'Поддержка сообщества', 'Обратная связь по проектам', 'Все модули и задания']
		},
		{
			animate: 'fadeInRight',
			title: 'Бюджетный',
			desc: 'Хорошо подойдёт тем, кто любит изучать всё самостоятельно.',
			price: 15000,
			href: '',
			list: ['Полный доступ к курсу', 'Доступ к учебной платформе', 'Поддержка сообщества', 'Обратная связь по проектам', 'Все модули и задания']
		},
	]



	return (<>
		<div container='' id='pricelist' className={clx(cls.wrap, className)}>
			<ScrollAnimate className={cls.title}><h2 data-title="Прайс">{"Тарифы, которые\nстоят своих денег"}</h2></ScrollAnimate>
			<DecoreBlur t='50%' l='50%' translate='-50% -0%'/>
			<div className={cls.list}>
				{pricelist.map(({animate, ...el}, i) => <ScrollAnimate className={cls.item} animateIn={animate} key={i}><PriceItem  {...el}/></ScrollAnimate>)}
			</div>
		</div>
	</>);
}
