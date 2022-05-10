import React, { useEffect, useRef, useState } from 'react';
// import required modules
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import RenderProducts from '../RenderProducts/RenderProducts';
import './ProductPopular.scss';





function ProductPopularApi() {

    const [products, setProducts] = useState([])

    const loadingRef = useRef()
    useEffect(() => {
        const getApiProducts = async () => {
            const apiProduct = await fetch('https://62618235327d3896e27cc529.mockapi.io/products/products');
            const responseJSON = await apiProduct.json();
            setProducts(responseJSON)

        }

        getApiProducts()
            .finally(() => {
                setTimeout(() => {
                    loadingRef.current.style.display = 'none';
                }, 1000)
            })
    }, [])



    return (
        <React.Fragment>
            <div className="popular">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="popular-text">
                                <h3 className="title">Sản Phẩm Nổi Bật</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-app">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={20}
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
                                        spaceBetween: 20,
                                    },
                                }}
                                className="mySwiper"
                            >
                                <div className="product-app">
                                    {products.map((product) => (
                                        <SwiperSlide key={product.id} >
                                            <RenderProducts
                                                id={product.id}
                                                title={product.title}
                                                imageUrl={product.imageUrl}
                                                price={product.price}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </div>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

            <div className="loading" ref={loadingRef}>
                <div className="loading-setTimeout"></div>
            </div>

        </React.Fragment>
    );
}

export default ProductPopularApi;