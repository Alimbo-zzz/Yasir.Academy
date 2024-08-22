import React, {useState} from 'react';
import scss from "./styles/Grid.module.scss";
import FlipCard from '@components/FlipCard';
import CircleLink from '@components/CircleLink';
import iconSet from "@resources/icons/all.json";
import Icon, { iconList } from "icomoon-react";

function Grid({list}) {


  return (<>
    <div className={scss.grid}>
			{list.map((el, i) =>(
				<div className={scss.grid__item} key={i}>
					<FlipCard
            percent={el.percent}
            title={el.title}
            frontList={el.frontText}
            backList={el.backList}
            icon={<Icon icon={el.icon} color="currentColor" iconSet={iconSet}/>}
            flipBtn={<Icon icon='flip' color="currentColor" iconSet={iconSet}/>}
          />
				</div>
			))}
			<div className={scss.grid__item} data-name='end'>
				<h4 className="title" data-size="2">Поможем реализовать ваши идеи и предложим актуальные решения</h4>
				<CircleLink/>
			</div>
		</div>
  </>);
}

export default Grid;
