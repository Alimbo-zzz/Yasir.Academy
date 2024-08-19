import React, { useEffect } from 'react';
import cls from './style.module.scss'
import { Contacts, FAQ, Footer, Header, Intro, PreviewVideo, Skills, Advantages, PriceList } from '@/templates';
import {Animate} from '@/contexts'



export default (props) => {

	
	return (<>
		<Animate className='wrapper'>
			<Header className={cls.header}/>
			<main className={cls.main}>
				<Intro/>
				<PreviewVideo/>
				<Skills/>
				<Advantages/>
				<PriceList/>
				<Contacts/>
				<FAQ/>
			</main>
			<Footer className={cls.footer}/>
		</Animate>
	</>);
}
