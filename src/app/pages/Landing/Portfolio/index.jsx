import React, {useState, useEffect, useRef} from 'react';
import Button from '@components/Button';
import {useGallery} from '@hooks';
import img from '@images/portfolio/1.png';
const images_test = import.meta.globEager('@images/portfolio/**/*.png');


function Portfolio(props) {
	const block = useRef();
	const [slides, setSlides] = useState([
		{value: 'fitness', name: 'Fitness tracker', images: []},
		{value: 'horoscope', name: 'Horoscope', images: []},
		{value: 'super-magic', name: 'Super-magic cleaner', images: []},
		{value: 'magic', name: 'Magic cleaner', images: []},
		{value: 'super', name: 'Super cleaner', images: []},
		{value: 'vpn', name: 'VPN', images: []},
		{value: 'toolbox', name: 'ToolBox', images: []},
	]);

	const allImages = useGallery(images_test);
	const [slider, setSlider] = useState({
		activeIndex: 0,
		length: slides.length,
		endSlide: false,
		startSlide: false,
	});

	useEffect(()=>{

		if(allImages?.obj){
			const cloneSlides = [];
			slides.forEach((el, i) => {
				let value = el.value;
				let name = el.name;
				let images = [
					allImages.obj[`${value}_1.png`],
					allImages.obj[`${value}_2.png`],
					allImages.obj[`${value}_3.png`],
					allImages.obj[`${value}_4.png`],
				];
				let obj = {name, images, value};
				cloneSlides.push(obj);
			});
			setSlides(cloneSlides);
		}
	},[allImages])

	useEffect(()=>{
		moveSlide('', setSlider)
	}, [])

	useEffect(()=>{
		let btn_next = block.current.querySelector('[data-btn="next"]');
		let btn_prev = block.current.querySelector('[data-btn="prev"]');
		btn_next.disabled = slider.endSlide;
		btn_prev.disabled = slider.startSlide;
	}, [slider])


	function moveSlide(command, func){
		func(prev => {
			let obj = {...prev};
			obj.endSlide = false;
			obj.startSlide = false;


			if(command === 'next' && slider.activeIndex < slider.length - 1) obj.activeIndex = prev.activeIndex + 1;
			if(command === 'prev' && slider.activeIndex > 0) obj.activeIndex = prev.activeIndex - 1;

			if(obj.activeIndex <= 0) obj.startSlide = true;
			if(obj.activeIndex >= slider.length - 1) obj.endSlide = true;

			return {...obj}
		})

	}



  return (<>
    <div ref={block} className="Portfolio">
			<div className="container">
				<h1 className="title _sec" data-size='6' data-aos='fade-up'>Портфолио</h1>
				<div className="Portfolio-slider">
					<div className="Portfolio-slider__list">
						{slides.map((el, i) => (
							<div className="Portfolio-slider__slide" key={i} data-active={slider.activeIndex === i}>
								{el.images.map((img, idx) =>(
									<img src={img} key={idx}/>
								))}
							</div>
						))}
					</div>
					<div className="Portfolio-slider__pagination">
						<span className="_index">{String(slider.activeIndex + 1).padStart(2, '0')}</span>
						<span className="_length">/{String(slider.length).padStart(2, '0')}</span>
					</div>
					<div className="Portfolio-slider__foot">
						<p className="text" data-size='4'>{slides[slider.activeIndex].name}</p>
						<div className="Portfolio-slider__btns">
							<Button icon='arrow_l' data-btn='prev' onClick={() => moveSlide('prev', setSlider)}/>
							<Button icon='arrow_r' data-btn='next' onClick={() => moveSlide('next', setSlider)}/>
						</div>
					</div>
				</div>
			</div>
		</div>
  </>);
}

export default Portfolio;
