import "swiper/css";
import "swiper/css/pagination";
import "./style/style.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";
import { Items } from "../../redux/slices/productSlice";

// MUI

// import required modules

type Props = {
  items: Items[];
};
function CaruselSlider({ items }: Props) {
  return (
    <>
      <div className="fullSlider">
        <div className="topSellAnouce">
          <h1 className="topH1">TOP SELLERS</h1>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {items?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="imgDiv">
                <img className="topSellImg" src={item.src} alt={item.title} />
              </div>
              <div className="titleDiv">
                <p className="topSellTitle">${item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default CaruselSlider;
