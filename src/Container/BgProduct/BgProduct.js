import React from 'react';
import { Link } from 'react-router-dom';
import './BgProduct.scss'


function BgProduct(props) {
    return (
        <div className="bg-product">
            <div className="overlay-bg"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="popular-text">
                            <h3 className="title">Tất Cả Sản Phẩm</h3>
                        </div>
                        <div className="cart-back">
                            <Link to="/">Trang chủ</Link>
                            <span>/</span>
                            <p>Sản Phẩm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BgProduct;