import React from 'react';
import { Link } from 'react-router-dom';
import './FormRegister.scss';

function FormRegister() {
    return (
        <div className="form-register">
            <div className="form-register-block">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="box-register">
                                <div className="box-register-title">
                                    <h3>ĐĂNG Ký TÀI KHOẢN</h3>
                                </div>
                                <div className="page-register">
                                    <h3>THÔNG TIN CÁ NHÂN</h3>
                                    <form action="">
                                        <div className="col-register">
                                            <label htmlFor="email">Họ *</label>
                                            <input type="text" placeholder="Họ" id="ho" required />
                                        </div>
                                        <div className="col-register">
                                            <label htmlFor="ten">Tên *</label>
                                            <input type="text" placeholder="Tên" id="ten" required />
                                        </div>
                                        <div className="col-register">
                                            <label htmlFor="sdt">Số điện thoại *</label>
                                            <input type="text" placeholder="Số điện thoại" id="sdt" required />
                                        </div>
                                        <div className="col-register">
                                            <label htmlFor="email">Email *</label>
                                            <input type="text" placeholder="Email" id="email" required />
                                        </div>
                                        <div className="col-register">
                                            <label htmlFor="password">Mật khẩu *</label>
                                            <input type="password" placeholder="Mật khẩu" id="password" required />
                                        </div>
                                        <div className="col-submit">
                                            <button>Đăng ký</button>
                                        </div>
                                    </form>
                                    <div className="or-register">
                                        <p>Bạn đã có tài khoản? Đăng nhập <Link to="/dangnhap">tại đây</Link></p>
                                        <p>Hoặc đăng nhập bằng</p>
                                        <div className="image-register">
                                            <a href="/"><img src="https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg" alt="" style={{ width: '130px' }} /></a>
                                            <a href="/"><img src="https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg" alt="" style={{ width: '130px' }} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormRegister;