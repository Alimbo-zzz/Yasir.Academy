import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import PrivacyModal from './PrivacyModal';

function Modals(props) {
	const {privacy} = useSelector(state => state.modals);


  return (<>
		<PrivacyModal data={privacy}/>
  </>);
}

export default Modals;
