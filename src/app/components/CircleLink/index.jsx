import React from 'react';

import scss from "./style.module.scss";
import img from "@images/main_arr_btn.svg";
import arrow from '@icons/arrow_b.svg';




function CircleLink(event) {
	const { link='#order', ...props} = event;

  return (<>
    <a {...props} href={link} className={scss.CircleLink} >
			<img src={img} className={scss.CircleLink__circle}/>
			<img src={arrow} className={scss.CircleLink__arrow}/>
		</a>
  </>);
}

export default CircleLink;
