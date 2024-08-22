import React from 'react';
import {useSelector} from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import hedgehog from '@images/hedgehog.png';
import List from './List.jsx';
import Slider from './Slider.jsx';

function About(props) {
	const {list, info} = useSelector(state => state.about);
	const isSlider = useMediaQuery({ maxWidth: 480 });


  return (<>
    <div className="About">
			<div className="About-reasons">
				<div className="About-reasons__pulse"><span></span></div>
				<div className="container _center">
					<h1 className="title" data-size="6" data-aos='fade-up'>Почему мы?</h1>
				</div>

				{	isSlider	? <Slider list={list}/> : <div className="container"><List list={list}/></div> }
			</div>

			<div className="About-content">
				<img src={hedgehog} className='_image' data-aos/>
				<div className="container">
					<div className="About-content__grid">
						<h4 className="title" data-size="3">Мы разрабатываем мобильные приложения и интегрируем эффективные инструменты монетизации, опираясь на опыт в широком спектре областей IT.</h4>
						<p className="text" data-size="3">Проводим анализ по множеству направлений, подбираем наиболее подходящие решения и тестируем их.  Создаем яркие и удобные интерфейсы, притягивающие пользователей, и выделяющиеся среди сотен других.</p>
						<ul className="About-content__list">
							{info.map((el, i)=>(
								<li className="About-content__item" key={i}>
									<h1 className="title" data-style="gold" data-size="6" data-aos='fade-in'>{el.value}</h1>
									<p className="text" data-size="6">{el.text}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
  </>);
}

export default About;
