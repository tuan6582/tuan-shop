import React from 'react';
import './ContactBody.scss'


function ContactBody() {
    return (
        <div className="contact-body">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-sm-12 col-md-12 col-12">
                        <div className="contact-top">
                            <h3>Liên Hệ</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="contact-left">
                            <div className="contact-info">
                                <div className="contact-info-item">
                                    <div className="title-icon">
                                        <i className="fa-solid fa-phone-volume"></i>
                                        Điện Thoại
                                    </div>
                                    <ul className="contact-list">
                                        <li><a href="tel: +84937358629">
                                            +84 937358629
                                        </a></li>
                                        <li>Thứ 2 đến Thứ 7: Từ 08h30 đến 19:30</li>
                                        <li>Chủ nhật: Từ 10h00 đến 16h00</li>
                                    </ul>
                                </div>
                                <div className="contact-info-item">
                                    <div className="title-icon">
                                        <i className="fa-solid fa-at"></i>
                                        Mạng Xã Hội
                                    </div>
                                    <ul className="contact-list">
                                        <li>
                                            <a href="/">
                                                <i className="fa-brands fa-facebook-square"></i>
                                                Facebook
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:thanhtuan6582@gmail.com">
                                                <i className="fa-solid fa-envelope"></i>
                                                Gmail
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="contact-submit">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="contact-form-group" >
                                        <label htmlFor="">Tên của bạn (*)</label>
                                        <input type="text" placeholder="Tên của bạn" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="contact-form-group">
                                        <label htmlFor="">Email (*)</label>
                                        <input type="text" placeholder="Email của bạn" />
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="contact-form-group">
                                        <label htmlFor="">Nội dung (*)</label>
                                        <input type="text" placeholder="Nội dung của bạn" />
                                        <div className="form-submit">
                                            <button>Gửi</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="contact-imag">
                            <img src="https://bizweb.dktcdn.net/100/394/290/themes/826502/assets/contact-img.jpg?1649081896650" style={{ width: '100%', borderRadius: '4px' }} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactBody;