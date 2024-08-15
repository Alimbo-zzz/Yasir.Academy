import React, { useEffect, useState, useRef } from 'react';
import cls from './style.module.scss'
import clx from 'classnames'
import preview_mp4 from './preview.mp4';
import PauseIcon from '@mui/icons-material/PauseCircleRounded';
import PlayIcon from '@mui/icons-material/PlayCircleRounded';
import { DecoreBlur } from '@/components';

export default ({className}) => {
	const [isPlay, setIsPlay] = useState(false);
	const [iconVisible, setIconVisible] = useState(true);
	const timeoutRef = useRef();
	const videoRef = useRef();
	
	const togglePlay = () => setIsPlay(prev => !prev);
	const ended = () => {
		setIsPlay(false); 
		setIconVisible(true);
		videoRef.current.pause();
		videoRef.current.currentTime = 0;
	}

	useEffect(()=>{
		if(isPlay) videoRef.current.play();
		else videoRef.current.pause();
	}, [isPlay])

	useEffect(()=>{
		if(!isPlay) return setIconVisible(true);
		clearTimeout(timeoutRef.current)
		timeoutRef.current = setTimeout(() => { setIconVisible(false) }, 300);
	}, [isPlay])

	const showControlls = () => {
		clearTimeout(timeoutRef.current);
		setIconVisible(true);
		if(!isPlay) return;
		timeoutRef.current = setTimeout(() => { setIconVisible(false) }, 300);
	}

	return (<>
		<div id='about' className={cls.overlay}>
			<h2 data-title='о нас'>Приятно познакомится</h2>
			<div onMouseMove={showControlls} container='' onClick={togglePlay} data-play={isPlay} className={clx(cls.wrap, className)}>
				<div className={cls.content}>
					<video ref={videoRef} onEnded={ended} src={preview_mp4}></video>
					<div data-visible={!isPlay ? 'true' : iconVisible} className={cls.icon}>
						{isPlay ? <PauseIcon/> : <PlayIcon/>}
					</div>
				</div>
			</div>
			<DecoreBlur r='0' t='0' translate='50% 0'/>
		</div>
		
	</>);
}
