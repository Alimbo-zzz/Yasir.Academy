import React, {useEffect, useState, useRef, useContext} from 'react';
import Input from '@components/Input';
import ButtonGradient from '@components/ButtonGradient';
import Radio from '@components/RadioBtn';
import Button from '@components/Button';
import {h_valid, h_req} from '@helpers';
import {useInput, useActions} from '@hooks';
import {LoaderContext, ModalContext} from '@contexts';

function Order(props) {
  const block = useRef(null);
  const [validObj, setValidObj] = useState({});
  const {startLoader, stopLoader} = useContext(LoaderContext);
  const {openModal, closeModal} = useContext(ModalContext);
  const name = useInput('');
  const appType = useInput('');
  const call = useInput('');
  const price = useInput('', {onlyNumbers:true, separated:true});
  const message = useInput('');
  const {open_modal} = useActions();
  const [file, setFile] = useState(null);
  const inp_file = useRef(null);


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
      name: h_valid(name.value, [{name:'notEmpty'}]).valid,
      appType: h_valid(appType.value, [{name:'notEmpty'}]).valid,
      call: h_valid(call.value, [{name:'notEmpty'}]).valid,
      price: h_valid(price.value, [{name:'notEmpty'}]).valid,
      message: h_valid(message.value, [{name:'notEmpty'}]).valid,
    };

    for (let key in valid_obj) {  if(valid_obj[key] === false) valid = false; }

    setValidObj(valid_obj);
    return valid;
  }
  function clear(){
    name.reset();
    appType.reset();
    call.reset();
    price.reset();
    message.reset();
    remove_file();
    // platform.reset();
  }
  function send(){
    const valid = validation();
    let platformItems = block.current.querySelectorAll("[name='platform']");
    let platform = 'none';
    platformItems.forEach((el, i) => {
      if(el.checked) platform = el.value;
    });


    const formData = new FormData();

    let body = {
      type: 'Order',
      dataList: [
        { name: 'Name', value: name.value},
        { name: 'Application Type', value: appType.value},
        { name: 'Call', value: call.value},
        { name: 'Price', value: price.value},
        { name: 'Platform', value: platform},
        { name: 'Message', value: message.value},
      ]
    }

    formData.append('file', file);
    formData.append('data', JSON.stringify(body));


    if(valid){
    startLoader();

    fetch('/api/order', {
      method:'POST',
      body: formData
    })
    .then(res => res.json())
    .then(res=>{
      const {status} = res;

      if(status == 'success'){
       openModal({text:'Заявка успешно отправлена!', title:'Заявка'})
      }
      else{
        openModal({text:'Произошла ошибка(', title:'Заявка'})
      }
    })
    .catch(err=>{
      console.log(err);
      openModal({text:'Произошла ошибка(', title:'Заявка'})
    })
    .finally(e => {
      stopLoader();
    })

    clear();
    }
    else{console.log('err');}
  }
  function change_file(e){
    let _file = e.target.files[0];
    setFile(_file);
  }
  function remove_file(){
    inp_file.current.value = '';
    setFile(null);
  }





  return (<>
    <div className="Order" ref={block}>
			<div className="container">
				<h1 className="title _sec" data-size='6' data-aos='fade-up'>Напишите нам</h1>
				<div className="hr"></div>
				<div className="sec-cont">
					<div className="sec-cont__title">
						<h3 className="title" data-size='3'>Мы найдем лучшее решение Вашей задачи</h3>
					</div>
					<div className="sec-cont__content">
						<form className="Order-form" autoComplete='off' onSubmit={e => e.preventDefault()}>
							<div className="Order-form__item" data-name='text'>
                <Input valid={validObj.name} {...name.bind} name="name" placeholder='Имя'/>
              </div>
							<div className="Order-form__item" data-name='text'>
                <Input valid={validObj.appType} {...appType.bind} name="appType" placeholder='Тип приложения'/>
              </div>
							<div className="Order-form__item" data-name='call'>
                <Input valid={validObj.call} {...call.bind} name="call" placeholder='Способ  связи'/>
                <div data-prompt='container'>
                  <div data-prompt='icon'>?</div>
                  <div data-prompt='list' >
                    <div data-prompt='item'>Telegram</div>
                    <div data-prompt='item'>WhatsApp</div>
                    <div data-prompt='item'>Email</div>
                    <div data-prompt='item'>Телефон</div>
                  </div>
                </div>
              </div>
							<div className="Order-form__item" data-name='radio'>
                <p className="placeholder">Платформа:</p>
                <div className="Order-form__box">
                  <Radio name='platform' value='ios' text='iOS'/>
                  <Radio name='platform' value='android' text='Android' defaultChecked='true'/>
                  <Radio name='platform' value='ios & android' text='iOS и Android'/>
                </div>
              </div>
							<div className="Order-form__item" data-name='price'>
                <Input maxLength={15} valid={validObj.price} {...price.bind} name="price" placeholder='Планируемый бюджет'/>
              </div>
							<div className="Order-form__item" data-name='textarea'>
                <Input maxLength={500} valid={validObj.message} {...message.bind} name="message" placeholder='Краткое описание' type='textarea'/>
              </div>
							<div className="Order-form__item" data-name='btns'>
								<ButtonGradient onClick={send}>заказать</ButtonGradient>
                <div data-name='file' data-active={file ? true : false}>
                  {file && <div onClick={remove_file} data-name='file-btn-remove'>удалить файл</div>}
                  <Button icon='clip' label={<input ref={inp_file} type="file" onChange={change_file} accept="image/*,image/jpeg,image/png,image/jpg,.doc,.xls,.xlsx,.docx,.pdf,.word,.excel,.zip"/>}/>
                </div>
							</div>
              <div className="Order-form__item" style={{marginTop:'10px'}} data-name='personal-data'>
                <p className="text">Нажимая кнопку, вы подтверждаете, что ознакомились с <span className="_link" onClick={() => open_modal('privacy')}>политикой обработки персональных данных</span> нашей и согласны с ней </p>
              </div>
						</form>
					</div>
				</div>
			</div>
		</div>
  </>);
}

export default Order;
