import React from 'react';
import { ContentMD } from '@/templates';
import offer_md from './offer.md'
import cls from './style.module.scss'
import clx from 'classnames'
import { BackControlls } from '@/components';
import {Animate} from '@/contexts'


export default (props) => {
	

	return (<>
		<Animate className={clx(cls.wrap, 'wrapper')}>
			<BackControlls className={cls.head}/>
			<ContentMD>{offer_md}</ContentMD>
		</Animate>
	</>);
}
