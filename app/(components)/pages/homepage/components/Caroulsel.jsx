"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";
const Carousel = ({ items = [] }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        className="mySwiper"
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
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
      >
        {items.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Link href={"/"}>
                <Image
                  width={100}
                  height={100}
                  alt="partners"
                  className="w-full h-[20rem] bg-cover"
                  src={`${process.env.NEXT_PUBLIC_PICTURE}/${item?.image}`}
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Carousel;
