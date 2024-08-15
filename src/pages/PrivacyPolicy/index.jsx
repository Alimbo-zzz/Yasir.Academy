import React from 'react';
import { ContentMD } from '@/templates';
import privacyPilicy_md from './privacy-policy.md'
import cls from './style.module.scss'
import { BackControlls } from '@/components';


export default (props) => {
	

	return (<>
		<div className={cls.wrap}>
			<BackControlls className={cls.head}/>
			<ContentMD>{privacyPilicy_md}</ContentMD>
		</div>
	</>);
}
