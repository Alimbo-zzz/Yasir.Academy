import React from 'react';
import scss from "./style.module.scss";
import logo from './logo.svg';

function Loader(props) {
  return (<>
    <div className={scss.loader}>
      <img src={logo} className={scss.loader__logo}/>
    </div>
  </>);
}

export default Loader;
