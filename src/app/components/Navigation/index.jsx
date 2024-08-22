import React, {useState} from 'react';
import scss from './style.module.scss';


function Navigation(props) {

	const [navList, setNavList] = useState([
		{text: 'О нас', link: '#about'},
		{text: 'Услуги', link: '#services'},
		{text: 'Портфолио', link: '#portfolio'},
		{text: 'Разработка', link: '#development'},
		{text: 'Контакты', link: '#contact'},
	])


  return (<>
    <nav className={scss.nav}>
			<ul className={scss.nav__list}>
				{navList.map(nav =>(
					<li className={scss.nav__item} key={nav.link}>
						<a href={nav.link} >{nav.text}</a>
					</li>
				))}
			</ul>
		</nav>
  </>);
}

export default Navigation;
