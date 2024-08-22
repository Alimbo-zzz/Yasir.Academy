import React, {useState, useEffect} from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import iconSet from "@resources/icons/all.json";
import Icon, { iconList } from "icomoon-react";
import {useGallery} from '@hooks';
import { useMediaQuery } from 'react-responsive';
import Button from '@components/Button';
import team_obg from '@resources/data/team.json';

const images_test = import.meta.globEager('@images/team/**/*.png');



import 'swiper/css/bundle';

function Team(props) {
	const [swiper, setSwiper] = useState(null);
	const [activeIndex, setActiveIndex] = useState(null);
	const [list, setList] = useState([1,2,3,4,5,6,7]);
	const [swiperData, setSwiperData] = useState({
		slidesPerView: 3,
		spaceBetween: 30,
	})
  const myGallery = useGallery(images_test);
	const isLaptop = useMediaQuery({ minWidth: 768 });
	const isTablet = useMediaQuery({ maxWidth: 768 });
	const isPhone = useMediaQuery({ maxWidth: 480 });


	useEffect(()=>{
		if(isLaptop) setSwiperData(prev => ({...prev, slidesPerView:3, spaceBetween: 30}));
		if(isTablet) setSwiperData(prev => ({...prev, slidesPerView:2, spaceBetween: 20}));
		if(isPhone) setSwiperData(prev => ({...prev, slidesPerView:1, spaceBetween: 10}));
	},[isTablet, isPhone])


	function initSwiper(data){
		setSlideAttrs(data);
		// setTimeout(()=>{
		// 	let middleIndex = Math.floor(data.slides.length / 2);
		// 	data.slideTo(middleIndex - 1);
		// }, 1000)
	}




	function nextSlide(){
		swiper.slideNext()
	}
	function prevSlide(){
		swiper.slidePrev()
	}
	function setSlideAttrs(e){
		let isMiddle = false;
		e.slides.forEach((el, i) => {
			if(el.classList.contains('swiper-slide-active')) isMiddle = true;
			if(!isMiddle) el.dataset.direction = 'left';
			if(isMiddle) el.dataset.direction = 'right';
			if(el.classList.contains('swiper-slide-active')) el.dataset.direction = 'middle';
		});

		setActiveIndex(e.activeIndex + 1)
	}




  return (<>
    <div className="Team">
			<div className="container">
				<h1 className="title _sec" data-size='6' data-aos='fade-up'>Команда</h1>
				<div className="Team-gallery">
					<Swiper
						onSwiper={setSwiper}
						onInit={initSwiper}
						{...swiperData}
						onSlideChangeTransitionEnd={setSlideAttrs}
        		centeredSlides={true}
						rewind={true}
					>
						{team_obg.map((el, i) => (
							<SwiperSlide key={i}>
								<div className='Team-gallery__item'>
									<div className="Team-card">
										<img src={myGallery.obj[`${el.id}.png`]}/>
									</div>
									<h4 className="title" data-size='2'>{el.name}</h4>
									<p className="text">{el.post}</p>
								</div>
							</SwiperSlide>
						))}

						<div className="Team-gallery__foot">
							<div className="Team-gallery__pagination">
								<span data-pagination="index">{String(activeIndex).padStart(2, '0')}</span>
								<span data-pagination="all">/{String(swiper?.slides.length).padStart(2, '0')}</span>
							</div>
							<div className="Team-gallery__arrows">
								<Button data-arrow='prev' onClick={prevSlide} icon={'arrow_l'}/>
								<Button data-arrow='next' onClick={nextSlide} icon={'arrow_r'}/>
							</div>
						</div>
					</Swiper>
				</div>
			</div>
		</div>
  </>);
}

export default Team;
