import React from 'react';
import img from '@icons/logo.svg';
import scss from './style.module.scss';

function Logo(props) {
  return (<>
    <div className={scss.logo}>
			<a href="/" ><img src={img}/></a>			
		</div>
  </>);
}

export default Logo;
