import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import '../Header/Header.scss'

export default function Slider() {
    return (
        <div className="slider">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="slider-item">
                        <a href="/">
                            <div className="" style={{
                                background: 'url("https://bluecons.vn/wp-content/uploads/2021/09/1631366903_669_Thiet-ke-shop-quan-ao-nho-dep.jpg")',
                                paddingTop: '40%',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: ' center',
                                objectFit: 'cover',
                            }}></div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item">
                        <a href="/">
                            <div className="" style={{
                                background: 'url("https://cosp.com.vn/uploaded/san-pham/2020/02/28/7ac9a624ecbd14e34dac2.jpg")',
                                paddingTop: '40%',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: ' center',
                                objectFit: 'cover',
                            }}></div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item">
                        <a href="/">
                            <div className="" style={{
                                background: 'url("https://housedesign.vn/wp-content/uploads/2020/01/thiet-ke-noi-that-shop-quan-ao-nam.jpg")',
                                paddingTop: '40%',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: ' center',
                                objectFit: 'cover',
                            }}></div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item">
                        <a href="/">
                            <div className="" style={{
                                background: 'url("https://housedesign.vn/wp-content/uploads/2020/01/noi-that-shop-thoi-trang-thiet-ke.jpg")',
                                paddingTop: '40%',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: ' center',
                                objectFit: 'cover',
                            }}></div>
                        </a>
                    </div>
                </SwiperSlide>


            </Swiper >
        </div>
    );
}
