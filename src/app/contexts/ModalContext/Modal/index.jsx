import React, {useEffect, useState} from 'react';
import scss from './styles.module.scss';
import PropTypes from "prop-types";
import { h_type } from '@helpers';
import logo from './logo.svg';

function Modal(props) {
	const {children, type = 'alert', title, btns, text, closeModal} = props;
	// -- children: 'text' || (jsx)
	// -- type: 'alert' || 'confirm'
	// -- btns: {btn_true, btn_false, btn_ok} > 'text btn' || func || ['text', func]
	// -- text: 'str'
	// -- title: 'str'

	// btns
	const [buttons, setButtons] = useState(false);
	const [btnTrue, setBtnTrue] = useState({text: 'Да', func: null});
	const [btnFalse, setBtnFalse] = useState({text: 'Нет', func: null});
	const [btnOk, setBtnOk] = useState({text: 'Ок', func: null});

	useEffect(()=>{
		if(type === 'confirm' || type === 'alert') setButtons(true);
	}, [type])


	useEffect(()=>{
		if(btns?.btn_true) checkBtn(btns.btn_true, setBtnTrue);
		if(btns?.btn_false) checkBtn(btns.btn_false, setBtnFalse);
		if(btns?.btn_ok) checkBtn(btns.btn_ok, setBtnOk);
	}, [btns])

	function checkBtn(data, setFunc){
		if(typeof data === 'string' || typeof data === 'number') setFunc(prev => ({...prev, text: data}) );
		if(typeof data === 'function') setFunc(prev => ({...prev, func: data}) );

		if(h_type(data).type === 'Array'){
			let text = null;
			let func = null;

			data.forEach((el, i) => {
				if(i < 2 && typeof el == 'string') text = el;
				if(i < 2 && typeof el == 'function') func = el;
			});

			if(text) setFunc(prev => ({...prev, text}) );
			if(func) setFunc(prev => ({...prev, func}) );
		}
	}

	function btnTrueFunc(){
		if(typeof btnTrue.func === 'function') btnTrue.func();
		closeModal();
	}
	function btnFalseFunc(){
		if(typeof btnFalse.func === 'function') btnFalse.func();
		closeModal();
	}
	function btnOkFunc(){
		if(typeof btnOk.func === 'function') btnOk.func();
		closeModal();
	}



  return (<>
    <div data-modal='modal' className={scss.modal}  onClick={closeModal} data-type={type}>
			<div data-modal='wrap' className={scss.modal__wrap} onClick={e => e.stopPropagation()}>
				<div data-modal='head' className={scss.modal__head}>
					<img data-name='logo' src={logo}/>
					{title && (<div data-modal='title' className={scss.modal__title}>{title}</div>)}
					{type !== 'alert' && (<button data-modal='btn-remove' className={scss.modal__remove} onClick={closeModal} >×</button>)}
				</div>
				<div data-modal='body' className={scss.modal__body}>
					{text && (<div data-modal='text' className={scss.modal__text}>{text}</div>)}
					{children}
				</div>
				<div data-modal='foot' className={scss.modal__foot}>
					{buttons && (
						<div data-modal='btns' className={scss.modal__btns}>
							{type === 'confirm' && (<button data-modal='btn-false' data-btn='false' onClick={btnFalseFunc}>{btnFalse.text}</button>)}
							{type === 'confirm' && (<button data-modal='btn-true' data-btn='true' onClick={btnTrueFunc}>{btnTrue.text}</button>)}
							{type === 'alert' && (<button data-modal='btn-ok' data-btn='ok' onClick={btnOkFunc}>{btnOk.text}</button>)}
						</div>
					)}
				</div>
			</div>
		</div>
  </>);
}


Modal.propTypes = {
  type: PropTypes.string,
};

export default Modal;
