import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Error, Main, Offer, PrivacyPolicy, Pay } from '@/pages';
import {AnimatePresence} from 'framer-motion'
import "animate.css/animate.compat.css";


const App = (props) => {
 	const location = useLocation();


	// useEffect(()=>{
	// 	if(!location.hash || location.hash == '#') return;		
	// 	document?.querySelector(location.hash)?.scrollIntoView()
	// },[location.hash])


	return (<>
		<AnimatePresence initial={true}>
			<Routes>
				<Route location={location} key={location.pathname} index element={<Main/>} />
				<Route path='/privacy-policy' element={<PrivacyPolicy/>} />
				<Route path='/offer' element={<Offer/>} />
				<Route path='/pay' element={<Pay/>} />
				<Route path='/*' element={<Error/>} />
			</Routes>
		</AnimatePresence>
	</>);
}

export default App;