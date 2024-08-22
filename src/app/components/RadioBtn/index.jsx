import React from 'react';
import scss from "./style.module.scss";

function RadioBtn(event) {
	const {text='', ...props} = event;

  return (<>
    <label className={scss.btn}>
			<input {...props} type='radio'/>
			<div className={scss.btn__style}></div>
			<div className={scss.btn__text}>{text}</div>
		</label>
  </>);
}

export default RadioBtn;
