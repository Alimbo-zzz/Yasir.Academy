import React from 'react';
import cls from './style.module.scss'
import clx from 'classnames'
import { format } from '@/scripts';
import TickIcon from '@mui/icons-material/VerifiedOutlined';
import { Button } from '@/ui';

export default ({className, theme='default', title='', desc='', price=10000, href='', list=[] }) => {
	
	return (<>
		<div className={clx(className, cls.wrap)} theme={theme}>
			<h3 className={cls.title}>{title}</h3>
			<p className={cls.desc}>{desc}</p>
			<h2 className={cls.price}>{format.price(price, '.')}₽</h2>
			<Button target="_blank" theme='light' href={href} className={cls.btn}>Оплатить доступ</Button>
			<ul className={cls.list}>
				<li className={cls.item} marked='false'>Включает:</li>
				{list.map((el, i) => <li className={cls.item} key={i}>{<TickIcon/>} {el}</li>)}
			</ul>
		</div>
	</>);
}
