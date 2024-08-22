import React from 'react';
import main_logo from '@images/gradient_logo.png';
import CircleLink from '@components/CircleLink';


function Intro(props) {
  return (<>
    <section className="Intro">
			<img src={main_logo} className="Intro__logo"/>
			<div className="Intro__grid container">
				<div className="Intro__preview">Hedgehog <br/>tech.</div>
				<div className="Intro__content">
					<div className="Intro__description">
						<div className="_title">Разработка лучших* <br/> мобильных приложений </div>
						<div className="_subtitle">* - по мнению наших мам</div>
					</div>
					<div className="Intro__btn"><CircleLink/></div>
				</div>
			</div>
		</section>
  </>);
}

export default Intro;
