import React from 'react';
import Bounce from 'react-reveal/Bounce';
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import useFetch from '../../hooks/useFetch';
import Heading from '../Heading';
import Service from './Service';
SwiperCore.use([Navigation, Pagination, Autoplay]);


const Services = () => {
    const [data] = useFetch('services');

    return (
        <section className="max-w-screen-xl mx-auto px-6 py-6 pb-24">
            {/* heading  */}
            <Heading title="Services" />

            {/* services  */}
            <Swiper
                className="mySwiper py-12"
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                pagination={true} grabCursor={true}
                slidesPerView={3}
                speed={400}
                spaceBetween={20}
                breakpoints={{
                    500: {
                        slidesPerView: 1,

                    },
                    700: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    }
                }}
            >
                {data.map(service => (
                    <SwiperSlide key={service.id}>
                        <Bounce left>
                            <Service  {...service} />
                        </Bounce>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Services
