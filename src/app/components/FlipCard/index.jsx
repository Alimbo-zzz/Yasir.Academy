import React, {useEffect, useState} from 'react';
import scss from "./style.module.scss";

function is_touch_device() {
  return 'ontouchstart' in window        // works on most browsers
    || navigator.maxTouchPoints;       // works on IE10/11 and Surface
};


function FlipCard(event) {
	const {frontList=[], backList=[], flipBtn='🗘', icon, percent=40, title='title', ...props} = event;
	const [side, setSide] = useState('front');

  const iconStyles = {
    strokeDasharray: 370,
    strokeDashoffset: (370 - (370 * percent)/100),
  }

  const dotStyles = {
    transform: `translate(-50%, -50%) scale(-1) rotate(${3.6 * percent}deg)`,
  }


	function toggleSide(){
		setSide(prev => {
			let result = 'front';
			if(prev === 'front') result = 'back';
			else if(prev === 'back') result = 'front';
			return result;
		})
	}
	function frontSide(){	setSide('front') }
	function backSide(){	setSide('back') }
	function hoverSide(type){
		if(!is_touch_device()){
			if(type === 'over') backSide();
			if(type === 'out') frontSide();
		}
	}


  return (<>
    <div
			data-name='card'
			className={scss.card}
			data-side={side}
			onMouseOver={()=>hoverSide('over')}
			onMouseOut={()=>hoverSide('out')}
		>
			<div data-name='card-front' className={scss.card__front} >
				<div data-name='card-head' className={scss.card__head}>
          {icon && (
            <div data-name='icon' className={scss.card__icon}>
              <div svg-item='icon'>{icon}</div>
              <div svg-item='dot' style={dotStyles}></div>
              <svg data-svg='circle' >
                <circle svg-item="bg" />
                <circle svg-item="meter-1" style={iconStyles} />
              </svg>
            </div>
          )}
					<button
						data-name='card-flip-btn'
						className={scss.card__flipBtn}
						onClick={toggleSide}
					>{flipBtn}</button>
				</div>
				<div data-name='card-body' className={scss.card__body}>
          {title && <h3 className={scss.card__title}>{title}</h3>}
          <div className={scss.card__text_cont}>
            {frontList.map((el, i)=>(
                <p className={scss.card__text} key={i}>{el}</p>
            ))}
          </div>
        </div>
				<div data-name='card-foot' className={scss.card__foot}></div>
			</div>
			<div data-name='card-back' className={scss.card__back} >
				<div data-name='card-head' className={scss.card__head}>
					<button
						data-name='card-flip-btn'
						className={scss.card__flipBtn}
						onClick={toggleSide}
					>{flipBtn}</button>
				</div>
				<div data-name='card-body' className={scss.card__body}>
          <div className={scss.card__text_cont}>
            {backList.map((el, i)=>(
                <p className={scss.card__text} key={i}>{el}</p>
            ))}
          </div>
        </div>
				<div data-name='card-foot' className={scss.card__foot}></div>
			</div>
    </div>
  </>);
}

export default FlipCard;
