import React from 'react';
import { Link } from 'react-router-dom';
import './BgContact.scss'


function BgContact() {
    return (
        <div className="bg-contact">
            <div className="overlay-bg"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="popular-text">
                            <h3 className="title">Liên Hệ Với Chúng Tôi</h3>
                        </div>
                        <div className="cart-back">
                            <Link to="/">Trang chủ</Link>
                            <span>/</span>
                            <p>Liên Hệ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BgContact;