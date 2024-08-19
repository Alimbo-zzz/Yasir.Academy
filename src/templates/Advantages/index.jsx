import React, { useState } from 'react';
import cls from './style.module.scss'
import clx from 'classnames'
import { DecoreBlur } from '@/components';
import { ScrollAnimate } from '@/contexts';


export default ({className}) => {
	const [list, setList] = useState([
		{title: 'Практическое обучение', text: 'Учитесь на реальных проектах и получайте навыки, которые сразу можно применять на практике.'},
		{title: 'Поддержка наставников', text: 'Получайте помощь и советы от опытных наставников на каждом этапе обучения.'},
		{title: 'Актуальные технологии', text: 'Осваивайте самые современные технологии и инструменты, используемые в веб-разработке.'},
		{title: 'Гибкий график обучения', text: 'Учитесь в удобное время, чтобы курс гармонично вписывался в ваш график.'},
		{title: 'Разработка портфолио', text: 'Создавайте проекты для портфолио, чтобы продемонстрировать свои навыки.'},
		{title: 'Поддержка', text: 'После завершения курса получите постоянный доступ к материалам и поддержку менторов.'},
	])
	
	
	return (<>
		<div container='' id='advantages' className={clx(cls.wrap, className)}>
			<DecoreBlur t='0' r='0' translate='50% -25%' />
			<ScrollAnimate><h2  data-title={'ОСОБЕННОСТИ'}>Почему выбрать Yasir?</h2></ScrollAnimate>
			<ul className={cls.list}>
				{list.map((el, i) => <ScrollAnimate  key={i} delay={i * 150}>
					<li className={cls.item}>					
						<h4>{el.title}</h4>
						<p>{el.text}</p>
					</li>
				</ScrollAnimate>)}
			</ul>
		</div>
	</>);
}
