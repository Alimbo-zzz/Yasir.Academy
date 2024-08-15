import React, { useEffect, useRef, useState } from 'react';
import cls from './style.module.scss'
import clx from 'classnames'
import { marked } from 'marked';
import { DecoreBlur } from '@/components';


export default ({className, children=''}) => {
	const contentRef = useRef();
	const [blurArr, setBlurArr] = useState([])

	const gap = 800;

	useEffect(()=>{
		let h = contentRef.current.scrollHeight;
		let num = Math.ceil(h / gap);
		
		for (let index = 0; index < num; index++) {
			setBlurArr(prev => ([...prev, index]));
		}
	}, [])

	const evenOps = (i) => ({
		t: i * gap,
		l: 0,
		translate: '-50% 0'
	})

	const oddOps = (i) => ({
		t: i * gap,
		r: 0,
		translate: '50% 0'
	})



	return (<>
		
		<div className={cls.cont}>
			<div ref={contentRef} container='' className={clx(cls.wrap, className)} dangerouslySetInnerHTML={{ __html: marked.parse(children)}} />
			{blurArr.map(el => <DecoreBlur {...(el % 2 === 0 ? evenOps(el) : oddOps(el))} className={cls.blur} key={el} />)}			
		</div>
	</>);
}
