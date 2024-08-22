import React from 'react';
import clx from 'classnames'
import cls from './style.module.scss'
import { Link } from 'react-router-dom';


export default ({href=null, size='', theme='dark',  w='fit-content', css={}, className='', children, type='button', ...props }) => {
	
	let ops = {
		type,
		href,
		"data-size": size.toUpperCase(),
		style: {width: w, ...css},
		theme,
		className: clx(cls.btn, className),
		...props,
	}

	return (<>
		{
			href ? 
			<a {...ops}>{children}</a>	
			:
			<button {...ops}>{children}</button>
		}
		
	</>);
}
