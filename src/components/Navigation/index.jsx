import React, { useEffect, useState } from 'react';
import cls from './style.module.scss'
import clx from 'classnames'
import { Link } from 'react-router-dom';


export default ({className, full=false, navClick}) => {
	const [nav, setNav] = useState([
		{link: '#about', content: 'О нас'},
		{link: '#advantages', content: 'Преимущества'},
		{link: '#pricelist', content: 'Цена'},
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
				<Link 
					onClick={itemClick} 
					to={el.link} 
					key={el.link}
					className={cls.item}
				>{el.content}</Link>)}
		</nav>
	</>);
}
