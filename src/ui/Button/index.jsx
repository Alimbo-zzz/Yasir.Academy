import React from 'react';
import clx from 'classnames'
import cls from './style.module.scss'
import { Link } from 'react-router-dom';


export default ({href=null, size='',  w='fit-content', css={}, className='', children, type='button', ...props }) => {
	
	let ops = {
		type,
		to: href,
		"data-size": size.toUpperCase(),
		style: {width: w, ...css},
		className: clx(cls.btn, className),
		...props,
	}

	return (<>
		{
			href ? 
			<Link {...ops}>{children}</Link>	
			:
			<button {...ops}>{children}</button>
		}
		
	</>);
}
