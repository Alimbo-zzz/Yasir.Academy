import React, {useRef, useEffect} from 'react';
import scss from './style.module.scss';

import iconSet from "@resources/icons/all.json";
import Icon, { iconList } from "icomoon-react";

function Button(event) {
	const {icon, link, label, children, hoverStyle, ...props} = event;
	const btn = useRef();

	useEffect(()=>{
		if(label){
			let label_block = btn.current.querySelector(`label`);
			btn.current.addEventListener('click', ()=>{ label_block.click(); })
		}
	},[])

  return (<>
		{
			link ? (
				<a
					ref={btn}
					{...props}
					href={link}
					className={scss.Button}
					data-content={(icon && children) ? 'full' : 'one'}
					data-style={hoverStyle ? hoverStyle : 'base'} 
				>
					{icon && <div className={scss.Button__icon}> <Icon icon={icon} color="currentColor" iconSet={iconSet}/> </div>}
					{children && <div className={scss.Button__content}>{children}</div>}
					{label && <label className={scss.Button__label}>{label}</label>}
				</a>
			)
			: (
				<button
					ref={btn}
					{...props}
					className={scss.Button}
					data-content={(icon && children) ? 'full' : 'one'}
					data-style={hoverStyle ? hoverStyle : 'base'}
				>
					{icon && <div className={scss.Button__icon}> <Icon icon={icon} color="currentColor" iconSet={iconSet}/> </div>}
					{children && <div className={scss.Button__content}>{children}</div>}
					{label && <label className={scss.Button__label}>{label}</label>}
				</button>
			)
		}
  </>);
}

export default Button;
