import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './BgLogin.scss'


function BgLogin() {

    const loadingRef = useRef()

    const loadingPage = () => {
        setTimeout(() => {
            loadingRef.current.style.display = 'none';
        }, 1000)
    }

    loadingPage()

    return (
        <React.Fragment>
            <div className="bg-login">
                <div className="overlay-bg"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="popular-text">
                                <h3 className="title">Đăng Nhập</h3>
                            </div>
                            <div className="cart-back">
                                <Link to="/">Trang chủ</Link>
                                <span>/</span>
                                <p>Đăng Nhập</p>
                            </div>
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

export default BgLogin;