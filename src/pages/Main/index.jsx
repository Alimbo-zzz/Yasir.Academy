import React from 'react';
import cls from './style.module.scss'
import { Contacts, FAQ, Footer, Header, Intro, PreviewVideo, Skills, Advantages } from '@/templates';

export default (props) => {
	
	return (<>
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
	</>);
}
