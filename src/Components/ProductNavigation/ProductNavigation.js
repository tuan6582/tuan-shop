import React from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './ProductNavigation.scss';





export default function ProductNavigation() {
    return (

        <div className="list-product-category">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="product-category-title">
                            <h3 className="title">Danh Mục Sản Phẩm</h3>
                            <p>Tất cả sản phẩm đều được bảo hành 12 Tháng</p>
                        </div>
                        <div className="product-navigation">
                            <Swiper slidesPerView={4}
                                spaceBetween={10}
                                slidesPerGroup={1}
                                loop={true}
                                loopFillGroupWithBlank={true}
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
                                        slidesPerView: 4,
                                        spaceBetween: 10,
                                    },
                                }}
                                className="mySwiper">
                                <SwiperSlide>
                                    <div className="product-navigation-item">
                                        <Link to="/sanpham">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3vlLZmRXr12liG3dOtqB2ZyDH3q1GA4-2Dw&usqp=CAU" alt="" className="product-image" />
                                            <h3>Áo Nam Nữ</h3>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-navigation-item">
                                        <Link to="/sanpham">
                                            <img src="https://cf.shopee.vn/file/1bbedaee82451d850c51d91d8d292b47" alt="" className="product-image" />
                                            <h3>Quần Nam Nữ</h3>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-navigation-item">
                                        <Link to="/sanpham">
                                            <img src="https://media3.scdn.vn/img3/2019/7_18/5GwdHE_simg_de2fe0_500x500_maxb.jpg" alt="" className="product-image" />
                                            <h3>Nón Nam Nữ</h3>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-navigation-item">
                                        <Link to="/sanpham">
                                            <img src="https://cf.shopee.vn/file/c6fdcfd6c678084f263463c4c7a8a11a_tn" alt="" className="product-image" />
                                            <h3>Ví Nam Nữ</h3>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-navigation-item">
                                        <Link to="/sanpham">
                                            <img src="https://cf.shopee.vn/file/43bd0b5fca9af75a81671a0666236cd6" alt="" className="product-image" />
                                            <h3>Thắt Lưng Nam Nữ</h3>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
