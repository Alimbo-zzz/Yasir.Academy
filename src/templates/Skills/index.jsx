import React, { useEffect, useRef, useState } from 'react';
import cls from './style.module.scss'
import clx from 'classnames'
import { DecoreBlur } from '@/components';

import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.scss';
import { Icon } from '@/ui';
import { ScrollAnimate } from '@/contexts';


export default ({className}) => {
	const swiperRef = useRef(null);
	const [swiper, setSwiper] = useState(null)
	const [skills, setSkills] = useState([
		{icon: 'responsive', title: 'Адаптивная верстка', text: 'Научитесь верстать как для мобильных устройств (смартфонов и планшетов), так и для больших 4K-телевизоров.'},
		{icon: 'html', title: 'HTML5', text: 'Освоите все необходимые теги для создания семантически правильного сайта.'},
		{icon: 'css', title: 'CSS3', text: 'Научитесь красиво стилизовать и анимировать элементы. Ваш сайт заиграет красками!'},
		{icon: 'js', title: 'JavaScript', text: 'На практике освоите нативный JavaScript, научитесь программировать и взаимодествовать с DOM.'},
		{icon: 'git', title: 'GIT', text: 'Освоите работу в консоли Terminal и научитесь работать с версиями проекта.'},
		{icon: 'npm', title: 'NPM', text: 'Познакомитесь с пакетным менеджером npm. Мы научим вас пользоваться плагинами.'},
		{icon: 'sass', title: 'Sass', text: 'Вы освоите все нюансы работы с SASS. Научитесь прощать и ускорять работу в CSS.'},
		{icon: 'gulp', title: 'Gulp', text: 'Освоите сборщик проекта Gulp, он упростит разработку и оптимизирует ваш сайт.'},
	])


	const swiperOps = {
		slidesPerView: 1.2,
		spaceBetween: '5%', 
		className: cls.slider,
		modules: [ Pagination, Autoplay],
		rewind: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},		
		pagination:{ clickable: true },
		breakpoints: {
			480: {				
				slidesPerView: 1.5,
			},
			765: {
				slidesPerView: 2.2,
				spaceBetween: '4%', 
			},
			1024: {
				spaceBetween: '3%', 
				slidesPerView: 2.5,
			},
			1220: {				
				spaceBetween: '2%', 
				slidesPerView: 3,
			}
		}
	}

	
	return (<>
		<div container='' className={clx(cls.wrap, className)}>
			<DecoreBlur t='0' l='0' translate='-50% 0'/>
			<ScrollAnimate><h2 data-title=''>За 8 недель вы научитесь</h2></ScrollAnimate>
			
			<ScrollAnimate animateIn='fadeInRight' delay={300}>
				<Swiper  {...swiperOps} >
					{skills.map((el, i) => <SwiperSlide key={i} className={cls.slide}>
						<div className={cls.item}>
							<div className={cls.item__icon}><Icon name={el.icon}/></div>
							<h4>{el.title}</h4>
							<p>{el.text}</p>
						</div>
					</SwiperSlide>)}
				</Swiper>
			</ScrollAnimate>
			
		</div>
	</>);
}
