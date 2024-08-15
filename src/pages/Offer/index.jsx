import React from 'react';
import { ContentMD } from '@/templates';
import offer_md from './offer.md'
import cls from './style.module.scss'
import { BackControlls } from '@/components';


export default (props) => {
	

	return (<>
		<div className={cls.wrap}>
			<BackControlls className={cls.head}/>
			<ContentMD>{offer_md}</ContentMD>
		</div>
	</>);
}
