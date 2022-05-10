import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import './BannerProduct.scss'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

function BannerProduct() {

    return (
        <div className="banner-product">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-sm-12 col-md-12 col-12">
                        <div className="popular-text">
                            <h3 className="title">Bộ Sưu Tập Khác</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            slidesPerGroup={3}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                            }}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="banner-image">

                                    <img src="https://bizweb.dktcdn.net/100/427/638/themes/821662/assets/col_banner_1.jpg?1649392229188" alt="" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="banner-image">

                                    <img src="https://bizweb.dktcdn.net/100/427/638/themes/821662/assets/col_banner_2.jpg?1649392229188" alt="" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="banner-image">

                                    <img src="https://bizweb.dktcdn.net/100/427/638/themes/821662/assets/col_banner_3.jpg?1649392229188" alt="" />
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerProduct;