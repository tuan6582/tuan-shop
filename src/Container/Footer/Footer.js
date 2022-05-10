import React from 'react';
import './Footer.scss';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="footer-item">
                            <h3>Welcome To Tuấn Shop</h3>
                            <p>Chúng tôi mong muốn Tuấn Shop sẽ trở thành "Ngôi nhà", nơi mọi người giải tỏa được sự mệt mỏi và tìm thấy niềm vui, sự sẻ chia thân tình bên bạn bè và người thân.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="footer-item">
                            <h3>Liên Hệ Với Chúng Tôi</h3>
                            <span>Địa chỉ: <p>Thành phố Biên Hòa tỉnh Đồng Nai</p></span>
                            <span>Email: <p>thanhtuan6582@gmail.com</p></span>
                            <span>Hotline: <p>0705821332</p></span>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="footer-item">
                            <h3>Đăng Ký Nhận Khuyến Mãi</h3>
                            <p>Đừng bỏ lỡ những sản phẩm và chương trình khuyến mại hấp dẫn</p>
                            <div className="form-group">
                                <input type="text" placeholder="Email của bạn" />
                                <button>Đăng ký</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;