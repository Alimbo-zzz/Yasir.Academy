import React from 'react';
import cls from './style.module.scss'
import clx from 'classnames'
import logo_svg from './logo-str.svg';


export default ({className}) => {
	
	return (<>
		<a href='/' className={clx(cls.wrap, className)}>
			<img src={logo_svg} alt="logo" />
		</a>
	</>);
}
