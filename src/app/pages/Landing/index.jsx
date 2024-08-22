import React, {useState, useEffect, useContext} from 'react';
import {LoaderContext} from '@contexts';

import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import Modals from '@components/Modals';


function Landing(props){
  const [isLoaded, setLoaded] = useState(false);
  const {startLoader, stopLoader} = useContext(LoaderContext);


  useEffect(()=>{
    if(isLoaded) stopLoader();
    else startLoader();
  }, [isLoaded])


  useEffect(()=>{
    setTimeout(()=>{
      setLoaded(true);
    }, 1000)
  },[])



  return (<>
    {
      isLoaded ?
      (<div className="Landing page">
        <Header/>
        <Main/>
        <Footer/>
        <Modals/>
      </div>)
      : ''
    }
  </>);
}

export default Landing;
