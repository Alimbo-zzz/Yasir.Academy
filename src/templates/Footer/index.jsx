import React from 'react';
import cls from './style.module.scss'
import clx from 'classnames'
import { Logo } from '@/ui';
import { Navigation } from '@/components';


export default ({className}) => {
	
	return (<>
		<footer className={clx(cls.wrap, className)}>
			<div container='' className={cls.cont}>
				<div className={cls.block}>
					<div className={cls.box}>
						<Logo/>
						<p>Академия YASIR стремится развивать программирование на Кавказе.</p>
					</div>
					<Navigation full={true} className={cls.nav}/>
				</div>
				<hr />
				<div className={cls.block}>
					<span>© 2024 YASIR. Все права защищены.</span>

					<div className={cls.info}>
						<a href="/privacy-policy">Политика конфиденциальности</a>
						{/* <a href="/license">Лицензия</a> */}
						<a href="/offer">Договор-оферты</a>
					</div>
				</div>
			</div>
		</footer>
	</>);
}
