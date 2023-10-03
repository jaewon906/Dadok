import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper"


function App() {

  return (
    <>
      <Swiper navigation={true} rewind={true} modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }} className="mySwiper">
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/swiper_1.png'} alt=""/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/swiper_2.png'} alt=""/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/swiper_3.png'} alt=""/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/swiper_4.png'} alt=""/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/swiper_6.png'} alt=""/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/swiper_7.png'} alt=""/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + '/swiper_8.png'} alt=""/></SwiperSlide>
      </Swiper >
    </>
  );
};

export default App;
