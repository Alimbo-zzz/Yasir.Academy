import React, {useEffect, useState, useRef, useContext} from 'react';
import Input from '@components/Input';
import Btn from '@components/ButtonGradient';
import {h_valid, h_req} from '@helpers';
import {useInput, useActions} from '@hooks';
import {LoaderContext, ModalContext} from '@contexts';




function Contacts(props) {
  const block = useRef(null);
  const [validObj, setValidObj] = useState({});
  const {startLoader, stopLoader} = useContext(LoaderContext);
  const {openModal, closeModal} = useContext(ModalContext);
  const name = useInput('');
  const phone = useInput('', {onlyNumbers:true});
  const telegram = useInput('');
  const mail = useInput('');
  const message = useInput('');
  const {open_modal} = useActions();


  useEffect(()=>{
    let inps = block.current.querySelectorAll('[name]');
    inps.forEach((el, i) => {
      el.addEventListener('focus', ()=>{
        let data_valid = el.parentNode.dataset.valid;
        if(data_valid === 'false') setValidObj( prev => ({...prev, [el.name]: true}) );
      })
    });
  },[])

  function validation(){
    let valid = true;
    let valid_obj = {
      mail: h_valid(mail.value, [{name:'mail'}]).valid,
      phone: h_valid(phone.value, [{name:'notEmpty'}]).valid,
      message: h_valid(message.value, [{name:'notEmpty'}]).valid,
      name: h_valid(name.value, [{name:'notEmpty'}]).valid,
    };

    for (let key in valid_obj) {  if(valid_obj[key] === false) valid = false; }

    setValidObj(valid_obj);
    return valid;
  }
  function clear(){
    name.reset();
    phone.reset();
    telegram.reset();
    mail.reset();
    message.reset();
  }
  function send(){
    const valid = validation();

    let body = {
      type: 'Contacts',
      dataList: [
        { name: 'Name', value: name.value},
        { name: 'Phone', value: phone.value},
        { name: 'Telegram', value: telegram.value},
        { name: 'Mail', value: mail.value},
        { name: 'Message', value: message.value},
      ]
    }

    if(valid){
      startLoader();

      h_req({
        url: '/api/contacts',
        method: 'POST',
        body,
      })
      .then(res=>{
        console.log(res);
        const {status} = res;

        if(status == 'success'){
         openModal({text:'Заявка успешно отправлена!', title:'Контакты'})
        }
        else{
          openModal({text:'Произошла ошибка(', title:'Контакты'})
        }
      })
      .catch(err=>{
        console.log(err);
        openModal({text:'Произошла ошибка(', title:'Контакты'})
      })
      .finally(e => {
        stopLoader();
      })

      clear();
    }
    else{console.log('err');}
  }


  return (<>
    <div className="Contacts" ref={block}>
			<div className="container">
				<h1 className="title _sec" data-size='6'  data-aos='fade-up'>Контакты</h1>
				<div className="hr"></div>
				<div className="sec-cont">
					<div className="sec-cont__title">
						<h3 className="title" data-size='2'>Заполните форму обратной связи, и мы свяжемся с Вами в ближайшее время</h3>
					</div>
					<div className="sec-cont__content">
						<form className="Contacts-form" autoComplete='off' onSubmit={e => e.preventDefault()}>
							<div className="Contacts-form__item" data-name='text'>
                <Input name='name' placeholder='Имя' valid={validObj.name} {...name.bind}/>
              </div>
							<div className="Contacts-form__item" data-name='text'>
                <Input name='phone' placeholder='Телефон' valid={validObj.phone} {...phone.bind}/>
              </div>
							<div className="Contacts-form__item" data-name='text'>
                <Input name='telegram' placeholder='Telegram' {...telegram.bind}/>
              </div>
							<div className="Contacts-form__item" data-name='text'>
                <Input name='mail' placeholder='E-mail' valid={validObj.mail} {...mail.bind}/>
              </div>
							<div className="Contacts-form__item" data-name='textarea'>
                <Input maxLength={800} name='message' placeholder='Ваше сообщение' valid={validObj.message} type='textarea' {...message.bind}/>
              </div>
							<div className="Contacts-form__item" data-name='btns'>
								<Btn onClick={send}>Отправить</Btn>
                <p className="text">Нажимая кнопку, вы подтверждаете, что ознакомились с <span className="_link" onClick={() => open_modal('privacy')}>политикой обработки персональных данных</span> нашей и согласны с ней </p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
  </>);
}

export default Contacts;
