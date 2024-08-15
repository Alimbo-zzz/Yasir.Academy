import React from 'react';
import cls from './style.module.scss'
import clx from 'classnames'


export default ({className, size=16, l=null, t=null, r=null, b=null, translate=''}) => {
	
	return (<>
		<div 
			className={clx(cls.wrap, className)}
			style={{
				fontSize: size+'px',
				translate,
				left: l, right: r,
				top: t, bottom: b,
			}}
		/>
	</>);
}
