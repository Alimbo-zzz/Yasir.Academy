import React from 'react';

import scss from "./style.module.scss";
import logo from '@icons/logo.svg';


function Error(props) {
  return (<>
    <div className={scss.page}>
      <img src={logo} className={scss.page__logo}/>
      <h1 className={scss.page__title}>
        <span className={scss.status}>404</span>
        <span className={scss.message}>Not found</span>
      </h1>
      <a href="/" className={scss.page__btn}>Back home</a>
    </div>
  </>);
}

export default Error;
