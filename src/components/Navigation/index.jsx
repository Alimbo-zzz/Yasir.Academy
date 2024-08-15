import React, { useEffect, useState } from 'react';
import cls from './style.module.scss'
import clx from 'classnames'


export default ({className, full=false, navClick}) => {
	const [nav, setNav] = useState([
		{link: '#about', content: 'О нас'},
		{link: '#advantages', content: 'Преимущества'},
		// {link: '#rate', content: 'Цена'},
		{link: '#faq', content: 'FAQ'},
	]
)

	useEffect(() => {
		if(full) setNav(prev => [...prev, {link: '#contacts', content: 'Связаться'}])
	}, [full])

	const itemClick = (e) => {
		if(typeof navClick == 'function' ) navClick();
	} 
	
	return (<>
		<nav className={clx(cls.wrap, className)}>
			{nav.map(el => 
				<a 
					onClick={itemClick} 
					href={el.link} 
					key={el.link}
					className={cls.item}
				>{el.content}</a>)}
		</nav>
	</>);
}
