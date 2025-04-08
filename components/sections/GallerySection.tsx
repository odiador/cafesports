"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import './GallerySection.css';

export default function GallerySection() {
    return (
        <section id="gallery" className="bg-[#0e1114] pt-20 flex flex-col items-center">
            <h1>Galería</h1>
            <div className="max-w-screen w-full overflow-hidden">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Image src={"/gallery/01.jpg"} alt={"Primera imagen"} width={512} height={512}
                            className="img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={"/gallery/02.jpg"} alt={"Primera imagen"} width={512} height={512}
                            className="img" />

                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={"/gallery/03.jpg"} alt={"Primera imagen"} width={512} height={512}
                            className="img" />

                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={"/gallery/04.jpg"} alt={"Primera imagen"} width={512} height={512}
                            className="img" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}