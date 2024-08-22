import React from 'react';
import cls from './style.module.scss'
import clx from 'classnames'
import { Button } from '@/ui';
import { DecoreBlur } from '@/components';
import {ScrollAnimate} from '@/contexts';

export default ({className}) => {
	
	return (<>
		<section id='intro' className={clx(cls.wrap, className)}>
			<div container='' className={cls.cont}>
				<DecoreBlur l='0' t='0' translate='-50% -30%'/>
				<ScrollAnimate className={cls.title}><h1>Учись веб-разработке в Академии YASIR!</h1></ScrollAnimate>
				<ScrollAnimate delay={200} className={cls.subtitle}>
					{'В нашем Bootcamp вы освоите ключевые навыки веб-разработки в интенсивном формате.\nУчитесь на практике, изучая современные технологии и подходы к созданию сайтов.'}
				</ScrollAnimate>
				<ScrollAnimate delay={300} className={cls.foot}>
					<Button href="#pricelist" className={cls.foot__btn}>Записаться на Bootcamp</Button>
					<span className={'placeholder'}>Старт первого потока — 15 сентября</span>
				</ScrollAnimate>
			</div>
		</section>
	</>);
}
