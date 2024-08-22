import React, {useState, useEffect} from 'react';
import logo from '@icons/logo.svg';
import Button from '@components/Button';



function Footer(props) {
  const [socials, setSocials] = useState([
    // {icon: 'fb', link: ''},
    // {icon: 'wp', link: ''},
    // {icon: 'in', link: ''},
    {icon: 'hh', link: 'https://spb.hh.ru/employer/4936751'},
    {icon: 'tg', link: 'https://t.me/hdgh_sup'},
    {icon: 'dr', link: 'https://dribbble.com/hedgehogtech'},
    {icon: 'ln', link: 'https://www.linkedin.com/company/hedgehog-tech'},
  ])



  return (<>
    <footer className="Footer">
      <div className="container">
        <div className="hr"/>
        <div className="Footer__grid">
          <div className="_logo">
            <img src={logo}/>
            <p className="_logo-text">Hedgehog tech.</p>
          </div>
          <div className="_callback">
            {/*<a href="tel:+79998887766" >+7 999 888 77 66</a>*/}
            <a href="mailto:support@hedgehogtech.ru" >support@hedgehogtech.ru</a>
          </div>
          <div className="_socials">
            {socials.map(el => (
              <Button icon={el.icon} link={el.link} target='blank' key={el.icon}/>
            ))}
          </div>
          <div className="_created">© Copyright Hedgehog tech 2021-2022</div>
          <div className="_address">Лиговский пр-т 50, 210 <br/>191040, Санкт-Петербург </div>
        </div>
      </div>
    </footer>
  </>);
}

export default Footer;
