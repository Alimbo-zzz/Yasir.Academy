import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Error, Main, Offer, PrivacyPolicy } from '@/pages';


const App = (props) => {

	
	return (<>
		<div className={'wrapper'}>
			<Routes>
				<Route index element={<Main/>} />
				<Route path='/privacy-policy' element={<PrivacyPolicy/>} />
				<Route path='/offer' element={<Offer/>} />
				<Route path='*' element={<Error/>} />
			</Routes>
		</div>
	</>);
}

export default App;