import React, { useEffect, useRef, useState } from 'react';
import cls from './style.module.scss'
import clx from 'classnames'


export default ({className, preview='', content=''}) => {
	const [isOpen, setIsOpen] = useState(false);
	const contentRef = useRef();
	const footRef = useRef();

	useEffect(()=>{
		if(isOpen){
			let h = contentRef.current.scrollHeight;
			footRef.current.style.height = h + 'px';
		}else{
			footRef.current.style.height = '0px';
		}
	}, [isOpen])

	const toggleOpen = () => setIsOpen(prev => !prev);
	
	return (<>
		<div data-open={isOpen} className={clx(cls.wrap, className)}>
			<label onClick={toggleOpen} className={cls.head}>
				<h5 className={cls.preview}>{preview}</h5>
				<span data-active={isOpen} className={cls.icon}/>
			</label>
			<div ref={footRef} className={cls.foot}>
				<article ref={contentRef} data-active={isOpen} className={cls.content}>{content}</article>
			</div>
		</div>
	</>);
}
