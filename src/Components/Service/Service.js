import React from "react";
// import required modules
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './Service.scss';


const myServices = [
    {
        id: 1,
        title: 'Giao hàng toàn quốc',
        description: 'Miễn phí vận chuyển với các đơn hàng trị giá trên 2.000.000Đ',
        url: 'https://bizweb.dktcdn.net/100/437/253/themes/850452/assets/icon_service_1.svg?1646877276070',
    },
    {
        id: 2,
        title: 'Hỗ trợ online 24/24',
        description: 'Luôn hỗ trợ khách hàng 24/24 tất cả các ngày trong tuần',
        url: 'https://bizweb.dktcdn.net/100/437/253/themes/850452/assets/icon_service_2.svg?1646877276070',
    },
    {
        id: 3,
        title: 'Đỗi hàng dễ dàng',
        description: 'Miễn phí đổi trả trong vòng 30 ngày đầu tiên cho tất cả các mặt hàng',
        url: 'https://bizweb.dktcdn.net/100/437/253/themes/850452/assets/icon_service_3.svg?1646877276070',
    },
    {
        id: 4,
        title: 'Quà tặng hấp dẫn',
        description: 'Chương trình khuyễn mãi cực lớn và hấp dẫn hàng tháng',
        url: 'https://bizweb.dktcdn.net/100/437/253/themes/850452/assets/icon_service_4.svg?1646877276070',
    },
]


export default function Service() {
    return (
        <div className="service">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <div className="service-app">
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={10}
                                slidesPerGroup={4}
                                loop={true}
                                loopFillGroupWithBlank={true}
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
                                className="mySwiper"
                            >
                                {myServices.map((service) => (
                                    <SwiperSlide key={service.id}>
                                        <div className="service-item">
                                            <img src={service.url} alt="" />
                                            <div className="info-service">
                                                <h3>{service.title}</h3>
                                                <p>{service.description}</p>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                ))}


                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
