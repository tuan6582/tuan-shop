import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import './Review.scss'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const reviewArray = [
    {
        id: 1,
        name: 'Evelyn',
        components: 'Mình rất thích đưa khách hàng của mình đến đây bởi vì phong cách rất chuyên nghiệp, tôi sẽ ghé lại shop vào lần sau!',
        avatart: 'https://danviet.mediacdn.vn/upload/2-2018/images/2018-06-06/untitled-4-1528281099-width650height879.jpg',

    },
    {
        id: 2,
        name: 'Ella',
        components: 'Nhân viên tư vấn tận tình, dễ thương. Nhân viên lấy mẫu lại trẻ đẹp, cẩn thận và chu đáo. Nói chung, tôi đánh giá dịch vụ tốt',
        avatart: 'https://sohanews.sohacdn.com/thumb_w/1000/160588918557773824/2022/1/25/545115401202459359916962233533147478914324n-16431169305601408748504.jpg',

    },
    {
        id: 3,
        name: 'Ellie',
        components: 'Nike Epic React Flyknit là một trong số ít những đôi giày mang đến cho mình cảm giác hứng khởi mỗi khi xỏ chân vào',
        avatart: 'https://thuthuatnhanh.com/wp-content/uploads/2019/07/Angelina-Danilova-hinh-anh-girl-xinh-au-my-dep-nhu-thien-than-2-390x390.jpg',

    },
    {
        id: 4,
        name: 'Lily',
        components: 'Các loại mũ tại đây rất thời trang và rất thích hợp mang theo ngoài trời hoặc những buổi dã ngoại , tôi rất thích sản phẩm tại shop',
        avatart: 'https://allimages.sgp1.digitaloceanspaces.com/tipeduvn/2022/01/1641352656_433_Hinh-anh-gai-xinh-Chau-Au-My-xinh-dep-hut.jpg',

    },
]


function Review(props) {
    return (
        <div className="review">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <div className="popular-text">
                            <h3 className="title">Đánh giá của khách hàng</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <div className="review-app">
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                slidesPerGroup={1}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                modules={[Pagination, Navigation]}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 2,
                                        spaceBetween: 10,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 10,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 10,
                                    },
                                }}
                                className="mySwiper"
                            >
                                { }
                                {reviewArray.map((review) => (
                                    <SwiperSlide key={review.id}>
                                        <div className="review-item">
                                            <h3>{review.name}</h3>
                                            <i className="fa-solid fa-quote-right"></i>
                                            <p>{review.components}</p>
                                            <img src={review.avatart} alt="" width={'100px'} height={'100px'} />
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

export default Review;