import React from 'react';
import cls from './style.module.scss'
import clx from 'classnames'


export default ({className}) => {
	
	return (<>
		<div className={clx(cls.wrap, className)}>
			rate box
		</div>
	</>);
}
