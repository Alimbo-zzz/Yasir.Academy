import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Error, Main, Offer, PrivacyPolicy } from '@/pages';
import {AnimatePresence} from 'framer-motion'


const App = (props) => {
 const location = useLocation();
	
	return (<>
		<AnimatePresence initial={true}>
			<Routes>
				<Route location={location} key={location.pathname} index element={<Main/>} />
				<Route path='/privacy-policy' element={<PrivacyPolicy/>} />
				<Route path='/offer' element={<Offer/>} />
				<Route path='*' element={<Error/>} />
			</Routes>
		</AnimatePresence>
	</>);
}

export default App;