import React, {useRef, useEffect, useState} from 'react';
import scss from "./style.module.scss";

function Input(event) {
	const {type='text', placeholder, valid=true,  ...props} = event;
	// type = 'text' || 'textarea'
	const block = useRef(null);
	const [inpValid, setInputValid] = useState(valid);

	useEffect(()=>{
		setInputValid(valid);
	},[valid])


	useEffect(()=>{
		let inp = null;
		if(type == 'text') inp = block.current.querySelector('input');
		if(type == 'textarea') inp = block.current.querySelector('textarea');

		if(inp){
			inp.addEventListener('focus', ()=>{
				block.current.dataset.focus = 'true';
			})
			inp.addEventListener('blur', ()=>{
				block.current.dataset.focus = 'false';
			})

			inp.addEventListener('input', ()=>{
				if(inp.value.length)	block.current.dataset.content = 'true';
				else	block.current.dataset.content = 'false';
			})
		}

	}, [])



  return (<>
    <label
			className={scss.input}
			ref={block}
			data-type={type}
			data-focus='false'
			data-content='false'
			data-valid={inpValid}
			>
			{type === 'text' && <input {...props} type="text"/>}
			{type === 'textarea' && <textarea {...props} type="text"></textarea>}
			{placeholder && <p className={scss.input__placeholder}>{placeholder}</p>}
		</label>
  </>);
}

export default Input;
