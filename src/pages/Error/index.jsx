import React from 'react';
import cls from './style.module.scss'
import clx from 'classnames'
import { DecoreBlur } from '@/components';
import { Animate } from '@/contexts';
import { Button } from '@/ui';


export default (props) => {
	
	return (<>
		<Animate  className={clx(cls.wrap, 'wrapper')}>
			
			<div container='' className={cls.title}>
				<h1>404</h1>
				<h2>не найдено</h2>
				<Button href={'/'}>на главную</Button>
			</div>

			<DecoreBlur t='0' l='0' />
		</Animate>
	</>);
}
