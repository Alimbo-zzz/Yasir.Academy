import React, {useState, useEffect} from 'react';
import cls from './style.module.scss'
import clx from 'classnames'
import {Button, Logo} from '@/ui';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Navigation } from '@/components';


const Hamburger = ({isActive, toggle}) => (
	<button onClick={toggle} data-active={isActive} type='button' className={cls.hamburger}>
		<MenuIcon name='menu'/>
		<CloseIcon name='cross'/>
	</button>
)

const Menu = ({isActive, navClick}) => (
	<div  data-active={isActive} className={cls.menu}>
		<div className={cls.menu__cont} container=''>
			<Navigation navClick={navClick} className={cls.menu__nav}/>
			<Button size="S" href={'#contacts'} className={cls.menu__btn}>Связаться</Button>
		</div>
	</div>
) 

export default ({className}) => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const toggleMenu = () => setMenuIsOpen(prev => !prev);
	const closeMenu = () => setMenuIsOpen(false);


	useEffect(()=>{
		document.addEventListener('click', closeMenu)

		return () => {
			document.removeEventListener('click', closeMenu)
		}
	}, [])

	return (<>
		<header onClick={e => e.stopPropagation()} className={clx(cls.wrap, className)}>
			<div container='' className={cls.cont}>
				<Logo className={cls.logo}/>
				<Navigation className={cls.nav}/>
				<Button size="S" href={'#contacts'} className={cls.btn}>Связаться</Button>
				<Hamburger toggle={toggleMenu} isActive={menuIsOpen}/>
				<Menu  navClick={closeMenu} isActive={menuIsOpen}/>
			</div>
		</header>
	</>);
}
