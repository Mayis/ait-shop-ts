import "swiper/css";
import "swiper/css/pagination";
import "./style/style.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Items } from "../../redux/slices/productSlice";
import Typography from "@mui/material/Typography";

// MUI

// import required modules

type Props = {
  items: Items[];
};
function CaruselSlider({ items }: Props) {
  return (
    <>
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
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="150"
                  image={item.src}
                  alt={item.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="inherit" component="p">
                    {item.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default CaruselSlider;
