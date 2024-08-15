import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

const animations = {
	hide: {
		opacity: 0,
		// y: '100%',
		// scale: 0,	
		transition: {	duration: 0.3 }
	},
	show: {
		opacity: 1,
		// y: '0%',
		// scale: 1,
		transition: {	duration: 0.3 }
	},
	view: {
		opacity: 0,
		// y: '-100%',
		// scale: 0,	
		transition: {	duration: 0.3 }
	},
}

const motionData = {
	initial: animations.view,
	animate: animations.show,
	exit: animations.hide
}


function Animate({ children, ...props }) {
	const [visible, setVisible] = useState(false);

	useEffect(()=>{
		setTimeout(() => {
			setVisible(true)
		}, 300);
	},[])

	return (<>
	
		{
			visible && 
			<motion.div
				{...motionData}
				{...props}
			>
				{children}
			</motion.div >
		}
	</>);
}

export default Animate;