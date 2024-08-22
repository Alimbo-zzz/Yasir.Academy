import React, {useState, useEffect} from 'react';
import Logo from '@components/Logo';
import Navigation from '@components/Navigation';
import Button from '@components/Button';

function Header(props) {
  const [hamburgerActive, setHamburger] = useState(false);
  const [headerFix, setHeaderFix] = useState(false);

  useEffect(()=>{
    document.addEventListener('click', ()=>{
      setHamburger(false);
    })
    document.addEventListener('scroll', showHeader);
  }, [])

  function showHeader() {
    if (window.pageYOffset > 200) {
      setHeaderFix(true);
    } else {
      setHeaderFix(false);
    }
  }


  function toggleMenu(e){
    e.stopPropagation();
    setHamburger(prev => !prev);
  }



  return (<>
    <header className="Header" data-fix={headerFix}>
			<div className="Header__grid container">
				<div className="Header__item _logo"><Logo/></div>
				<div className="Header__item _nav" data-active={hamburgerActive} onClick={e => e.stopPropagation()}><Navigation/></div>
				<div className="Header__item _btn"><Button link="#contact" hoverStyle='transform'>Оставить заявку</Button></div>
        <div className="Header__item _hamburger" data-active={hamburgerActive} onClick={toggleMenu}>
          <span data-name='hamburger-line' data-active={hamburgerActive}></span>
        </div>
			</div>
		</header>
  </>);
}

export default Header;
