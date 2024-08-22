import React from 'react';
import scss from "./style.module.scss";

function ButtonGradient(event) {
	const {text, children, ...props} = event;

  return (<>
    <button {...props} className={scss.btn} >
			<div className={scss.btn__bg}/>
			<div className={scss.btn__content}>{children}</div>
		</button>
  </>);
}

export default ButtonGradient;
