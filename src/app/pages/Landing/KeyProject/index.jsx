import React from 'react';
import main_logo from '@images/gradient_logo.png';

function KeyProject(props) {
  return (<>
    <div className="KeyProject">
			<div className="container">
				<img src={main_logo} className="_image"/>
				<div className="KeyProject__grid">
					<h3 className="title _bold" data-size='5' data-aos='fade-up'>Нужен проект под ключ или отдельные его составляющие?</h3>
					<p className="text" data-size='3'>Наша команда эффективно выполняет полный цикл разработки, от аналитики и планирования до пост-релизного сопровождения. </p>
					<p className="text" data-size='3'>Дизайн, интеграция инструментов, техническая оптимизация, все это возможно реализовать по отдельности или комплексно, выбор за вами.</p>
					<p className="text" data-size='3'>Напишите нам и мы в кратчайшие сроки подберем наилучший вариант реализации Ваших задач. </p>
				</div>
			</div>
		</div>
  </>);
}

export default KeyProject;
