import React from 'react';
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default ({
	children, 
	delay=0, duration=1,
	animateIn='fadeInUp', animateOut=null, 
	scrollableParentSelector='.wrapper',
	initiallyVisible=false, animateOnce=true,
	afterAnimatedIn=null,  afterAnimatedOut=null,
	animatePreScroll=true,
	...props 
}) => {

	let ops = {
		scrollableParentSelector,
		delay, duration,
		animateIn, animateOut,
		initiallyVisible, animateOnce,
		afterAnimatedIn, afterAnimatedOut,
		animatePreScroll,
	}
	
	return (<>
		<ScrollAnimation {...props} {...ops} delay={delay} >
			{children}
		</ScrollAnimation>
	</>);
}
