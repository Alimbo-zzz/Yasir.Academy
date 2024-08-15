import React, { useEffect } from 'react';
import cls from './style.module.scss'
import { Contacts, FAQ, Footer, Header, Intro, PreviewVideo, Skills, Advantages } from '@/templates';
import { useLocation, useParams } from 'react-router-dom';
import {Animate} from '@/contexts'



export default (props) => {
	const params = useParams();
	const {hash} = useLocation();

	useEffect(()=>{
		if(!hash || hash == '#') return;		
		document?.querySelector(hash)?.scrollIntoView()
	},[hash])
	
	return (<>
		<Animate className='wrapper'>
			<Header className={cls.header}/>
			<main className={cls.main}>
				<Intro/>
				<PreviewVideo/>
				<Skills/>
				<Advantages/>
				<Contacts/>
				<FAQ/>
			</main>
			<Footer className={cls.footer}/>
		</Animate>
	</>);
}
