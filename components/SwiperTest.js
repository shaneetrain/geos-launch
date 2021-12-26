import React, { useRef, useState } from "react";
import Image from "next/image";
import { geosData } from "../utils/geosDatabase";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import GeoImageMobile from "./GeoImageMobile";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function SwiperTest({ image }) {
    return (
        <div className="w-screen">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                speed={0}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                allowTouchMove={false}
                pagination={{
                    clickable: false,
                }}
                navigation={false}
                className="mySwiper"
            >
                {geosData.map((geo) => {
                    return (
                        <SwiperSlide key={geo.pathHead}>
                            <GeoImageMobile
                                pathBody={geo.pathBody}
                                pathHead={geo.pathHead}
                                color={geo.color}
                                image={image}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
