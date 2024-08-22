import React from 'react';
import Intro from './Intro';
import About from './About';
import Questions from './Questions';
import Portfolio from './Portfolio';
import KeyProject from './KeyProject';
import Development from './Development';
import Order from './Order';
import Team from './Team';
import Contacts from './Contacts';

function Main(props) {
  return (<>
    <main className="Main">
      <Intro/>
      <section className="sec" id="about"> <About/> </section>
      <section className="sec" id="services"> <Questions/> </section>
      <section className="sec" id="portfolio"> <Portfolio/> </section>
      <section className="sec" id="development"> <Development/> </section>
      <section className="sec" id="keyProject"> <KeyProject/> </section>
      <section className="sec" id="order"> <Order/> </section>
      <section className="sec" id="team"> <Team/> </section>
      <section className="sec" id="contact"> <Contacts/> </section>
    </main>
  </>);
}

export default Main;
