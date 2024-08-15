import React from 'react';
import cls from './style.module.scss'
import clx from 'classnames'
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import HomeIcon from '@mui/icons-material/Home';


export default ({className}) => {
	
	return (<>
		<div container=''  className={clx(cls.wrap, className)}>
			<Link to={-1}><KeyboardBackspaceIcon/></Link>	
			<Link to='/'><HomeIcon/></Link>	
		</div>
		<div className={cls.m}/>
	</>)
}
