import React, {useState, useEffect} from 'react';
import scss from "./styles/Gallery.module.scss";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import FlipCard from '@components/FlipCard';
import iconSet from "@resources/icons/all.json";
import Icon, { iconList } from "icomoon-react";
import CircleLink from '@components/CircleLink';
import 'swiper/css/bundle';

function Gallery({list}) {
  const [swiper, setSwiper] = useState(null);
  const [pag, setPag] = useState([]);


  function swiperInit(e){
    checkPag(e);
  }


  function swiperSlideChange(e){
    checkPag(e);
  }


  function checkPag(data){
    let arr = [];
    data.slides.forEach((el, i) => {
      let obj = {idx:i, active: false};
      if(i == data.activeIndex) obj.active = true;
      arr.push(obj);
    });
    setPag(arr);
  }




  return (<>
    <div className={scss.gallery} >
      <Swiper
        onSwiper={setSwiper}
        onInit={swiperInit}
        onSlideChange={swiperSlideChange}
      >
        {list.map((el, i) => (
          <SwiperSlide key={i}>
            <div className={scss.gallery__item} >
              <FlipCard
                percent={el.percent}
                title={el.title}
                frontList={el.frontText}
                backList={el.backList}
                icon={<Icon icon={el.icon} color="currentColor" iconSet={iconSet}/>}
                flipBtn={<Icon icon='flip' color="currentColor" iconSet={iconSet}/>}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={scss.gallery__pagination}>
        {pag.map((el,i)=>(
          <div
            className={scss.gallery__bullet}
            key={i}
            index={el.idx}
            data-active={el.active}
            onClick={()=>{swiper.slideTo(el.idx)}}
          />
        ))}
      </div>
    </div>
    <div className={scss['by-btn']}>
      <h4 className="title" data-size="2">Поможем реализовать ваши идеи и предложим актуальные решения</h4>
      <CircleLink/>
    </div>
  </>);
}

export default Gallery;
