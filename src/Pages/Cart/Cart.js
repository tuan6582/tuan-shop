import React, { useContext, useRef } from 'react';
import './Cart.scss'
import { CartContext } from '../../Components/CartContext/CartContext';
import { Link } from 'react-router-dom';
import Footer from '../../Container/Footer/Footer';
import BackToTop from '../../Components/BackToTop/BackToTop';
import MenuTop from '../../Components/MenuTop/MenuTop';


function Cart(props) {

    const { addProductCart, total } = useContext(CartContext);

    const loadingRef = useRef()

    const loadingPage = () => {
        setTimeout(() => {
            loadingRef.current.style.display = 'none';
        }, 1000)
    }

    loadingPage()

    return (

        <React.Fragment>

            <MenuTop />

            <div className="cart">
                <div className="cart-top">
                    <div className="overlay-bg"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="popular-text">
                                    <h3 className="title">Giỏ Hàng</h3>
                                </div>
                                <div className="cart-back">
                                    <Link to="/">Trang chủ</Link>
                                    <span>/</span>
                                    <p>Giỏ hàng</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-center">
                    <div className="container">
                        <div className="row">
                            {addProductCart.slice(1).map((cartProduct, index) => (
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12" key={index}>
                                    <div className="cart-item">
                                        <div className="cart-image">
                                            <img src={cartProduct.image} alt="" width={'150px'} height={'150px'} />
                                        </div>
                                        <div className="cart-info">
                                            <h3>{cartProduct.title}</h3>
                                            <span>Giá: {new Intl.NumberFormat().format(cartProduct.price)}đ</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {total ?
                                <>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="price-button">
                                            <span>Tổng cộng: {new Intl.NumberFormat().format(total)}đ</span>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="create-button">
                                            <button>Thanh toán</button>
                                        </div>
                                    </div>
                                </>
                                :
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="no-product">
                                        <span>Chưa có sản phẩm</span>
                                        <Link to="/sanpham">Mua sản phẩm</Link>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="loading" ref={loadingRef}>
                <div className="loading-setTimeout"></div>
            </div>
            <Footer />
            <BackToTop />
        </React.Fragment>
    );
}

export default Cart;