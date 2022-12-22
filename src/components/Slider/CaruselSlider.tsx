import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style/style.css';

import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Items } from '../../api/slices/products';

// MUI

// import required modules

type Props = {
  items: Items[];
};
function CaruselSlider({ items }: Props) {
  return (
    <>
      <Swiper
        pagination={{
          type: 'progressbar'
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {items?.map((item, i) => (
          <SwiperSlide key={`item${i}`}>
            <img src={item.src} alt={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default CaruselSlider;
