import React, { useEffect, useState } from 'react';
import cls from './style.module.scss'
import clx from 'classnames'
import { DropDown } from '@/ui';
import { DecoreBlur } from '@/components';
import { ScrollAnimate } from '@/contexts';


export default ({className}) => {
	const [faq, setFaq] = useState([
		{preview: 'Как проходит обучение?', content: 'Обучение проходит в частном телеграм-канале, где вы получаете доступ к материалам, заданиям и поддержке наставников.'},
		{preview: 'Что такое курс "Yasir"?', content: 'Это интенсивный bootcamp по веб-разработке, где вы получите все необходимые навыки для работы в этой области.'},
		{preview: 'Какой опыт нужен для участия в курсе?', content: 'Никакого специального опыта не требуется. Курс подходит для новичков и тех, кто хочет систематизировать свои знания.'},
		{preview: 'Сколько длится курс?', content: 'Курс длится 8 недель, в течение которых вы будете работать над реальными проектами.'},
		{preview: 'Какой уровень поддержки предоставляется?', content: 'Вы получите доступ к наставникам, поддержку сообщества и обратную связь по проектам.'},
	])


	return (<>
		<div id='faq' container='' className={clx(cls.wrap, className)}>
			<ScrollAnimate><h2 data-title=''>FAQ</h2></ScrollAnimate>
			<ScrollAnimate delay={100} duration={1.5}><p style={{textAlign: 'center'}}>Здесь собраны ответы на наиболее популярные вопросы о нашем курсе.</p></ScrollAnimate>
			
			<ul className={cls.list}>
				{faq.map((el, i) => <ScrollAnimate delay={i * 150} key={i}><DropDown {...el} /></ScrollAnimate> )}
			</ul>
		
			<DecoreBlur t='0' r='0' translate='50% -10%'/>
		</div>
	</>);
}
