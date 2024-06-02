import React from "react";
import { Mousewheel, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import Card1 from "../components/cards/Card1";

export default function MovieSection() {
 const waqar = [1,2,33,5,6,7,8]
  return (
    <>
      <div className="py-20 w-11/12 m-auto">
        <div className="py-5">
          <h2 className="text-3xl font-medium">Recently Updated</h2>
        </div>
        <div className="relative">

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          loop={true}
          navigation={true}
          modules={[Mousewheel, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper w-11/12 ml-0"
        >
        {waqar?.map((data, index)=>(

          <SwiperSlide>
            <Card1 index={index} />
          </SwiperSlide>
        ))}
        
          
        </Swiper>
        </div>
      </div>
    </>
  );
}
