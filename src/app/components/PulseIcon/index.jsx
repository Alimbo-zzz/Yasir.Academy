import React from 'react';
import scss from "./style.module.scss";

import iconSet from "@resources/icons/all.json";
import Icon, { iconList } from "icomoon-react";


function PulseIcon(allprops) {
  const {icon, ...props} = allprops;

  return (<>
    <div className={scss.PulseIcon}  {...props}>
			<div className={scss.PulseIcon__icon}>
        {icon && (<Icon icon={icon} color="currentColor" iconSet={iconSet}/>)}
      </div>
			<div className={scss.PulseIcon__circle}></div>
			<div className={scss.PulseIcon__circle}></div>
			<div className={scss.PulseIcon__circle}></div>
		</div>
  </>);
}

export default PulseIcon;
