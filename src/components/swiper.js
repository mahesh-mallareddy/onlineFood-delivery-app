import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import Swipecards from "./swipecards";
import restodata from "./swipecarddata";

import "swiper/modules/pagination/pagination.min.css";
import 'swiper/modules/navigation/navigation.min.css';

import { Navigation } from "swiper";


const Swipecardsheading = () => (
  <div className="bodyheading">
      <p>Most Loved Collections</p>
  </div>
);

export default Swiper = () => {
  return (
    <div className="swipermain">
        <Swipecardsheading />
    <Swiper className="swiper-maxw"
      modules={[Navigation]}
      loop={true}
      // spaceBetween={50}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        }
      }}

      navigation={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide key={restodata[0].data.id}>
        <div className="cards-grid">
          < Swipecards {...restodata[0].data } />
        </div>
      </SwiperSlide>
      <SwiperSlide key={restodata[1].data.id}>
        <div className="cards-grid" >
          < Swipecards {...restodata[1].data} />
        </div>
      </SwiperSlide>
      <SwiperSlide  key={restodata[2].data.id}>
        <div className="cards-grid">
          < Swipecards {...restodata[3].data}/>
        </div>
      </SwiperSlide>
      <SwiperSlide key={restodata[3].data.id}>
        <div className="cards-grid">
          < Swipecards {...restodata[2].data} />
        </div>
      </SwiperSlide>
      <SwiperSlide key={restodata[4].data.id}>
        <div className="cards-grid">
          < Swipecards {...restodata[4].data} />
        </div>
      </SwiperSlide>
      <SwiperSlide key={restodata[5].data.id}>
        <div className="cards-grid">
          < Swipecards {...restodata[5].data} />
        </div>
      </SwiperSlide>
      <SwiperSlide key={restodata[6].data.id}>
        <div className="cards-grid">
          < Swipecards {...restodata[6].data} />
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};