import React, {useState, useEffect} from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css/bundle';
import Button from '@components/Button';

function Slider({list}) {
	const [swiper, setSwiper] = useState(null);
	const [btnsDisabled, setBtnsDisabled] = useState({prev: false, next: false});


	function nextSlide(){
		swiper.slideNext()
	}
	function prevSlide(){
		swiper.slidePrev()
	}

	function sliderInit(e){
		checkBntsDisabled(e);
	}


	function sliderChange(e){
		checkBntsDisabled(e);
	}


	function checkBntsDisabled(data){
		if(data.isBeginning) setBtnsDisabled(e => ({next:false, prev:true}) );
		if(data.isEnd) setBtnsDisabled(e => ({next:true, prev:false}) );
		if(!data.isEnd && !data.isBeginning) setBtnsDisabled(e => ({next:false, prev:false}) );
	}

  return (<>
		<div className="About-reasons__slider">
			<Swiper
				onSwiper={setSwiper}
				onInit={sliderInit}
				onSlideChange={sliderChange}
			>
				{list.map((el, i) => (
					<SwiperSlide key={i}>
						<div className='About-reasons__slide About-reasons-slide' >
							<div className="About-reasons-slide__index">{String(i + 1).padStart(2, '0')}</div>
							<h4 className="title" data-size="2">{el.title}</h4>
							<p className="text" data-size='1'>{el.text}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className="container" data-name='slider-btns'>
				<Button data-arrow='prev' onClick={prevSlide} icon={'arrow_l'} disabled={btnsDisabled.prev}/>
				<Button data-arrow='next' onClick={nextSlide} icon={'arrow_r'} disabled={btnsDisabled.next}/>
			</div>
		</div>
  </>);
}

export default Slider;
