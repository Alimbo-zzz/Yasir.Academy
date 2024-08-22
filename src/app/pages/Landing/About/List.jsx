import React from 'react';

function List({list}) {
  return (<>
		<ul className="About-reasons__list">
			{list.map((el, i) => (
				<li className="About-reasons__item" key={i} data-aos>
					<h4 className="title" data-size="3">{el.title}</h4>
					<p className="text" data-size='1'>{el.text}</p>
				</li>
			))}
		</ul>
  </>);
}

export default List;
