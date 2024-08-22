import React, {useEffect, useState} from 'react';

import scss from "./style.module.scss";
import list_f from './list.js';
import {useActions} from '@hooks';


function PrivacyModal(props) {
	const {isOpen, } = props.data;
	const list = list_f();
	const {close_modal, open_modal}  = useActions();

	function close(){
		close_modal('privacy')
	}


  return (<>
    <div className={scss.modal} data-open={isOpen} onClick={close}>
			<div className={scss.modal__wrap} onClick={e => e.stopPropagation()}>
				<div className={scss.modal__head}>
					<button className={scss['modal__remove-btn']} onClick={close}>╳</button>
				</div>
				<div className={scss.modal__body}>
					<h1 className={scss.modal__title}>Политика в отношении обработки персональных данных</h1>
					<ul className={scss.modal__list}>
						{list.map((el, i)=>(
							<li key={i} className={scss.modal__item}>
								<h3 className={scss.modal__title}>{el.title}</h3>
								{el.text.map((text, idx) => (
									<p key={idx} className={scss.modal__text}>{text}</p>
								))}
							</li>
						))}
					</ul>
				</div>
				<div className={scss.modal__foot}></div>
			</div>
		</div>
  </>);
}

export default PrivacyModal;
