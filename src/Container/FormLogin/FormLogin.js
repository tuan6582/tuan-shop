import React from 'react';
import { Link } from 'react-router-dom';
import './FormLogin.scss';

function FormLogin() {
    return (
        <div className="form-login">
            <div className="form-login-block">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="box-login">
                                <div className="box-login-title">
                                    <h3>ĐĂNG NHẬP TÀI KHOẢN</h3>
                                </div>
                                <div className="page-login">
                                    <h3>ĐĂNG NHẬP</h3>
                                    <p>Nếu bạn có một tài khoản, xin vui lòng đăng nhập</p>
                                    <form action="">
                                        <div className="col-login">
                                            <label htmlFor="email">Email *</label>
                                            <input type="text" placeholder="Email" id="email" required />
                                        </div>
                                        <div className="col-login">
                                            <label htmlFor="password">Mật khẩu *</label>
                                            <input type="password" placeholder="Mật khẩu" id="password" required />
                                        </div>
                                        <div className="col-submit">
                                            <button>Đăng nhập</button>
                                        </div>
                                        <p>Bạn chưa có tài khoản <Link to="/dangky">Đăng ký tại đây</Link></p>
                                    </form>
                                    <div className="or-login">
                                        <p>Hoặc đăng nhập bằng</p>
                                        <div className="image-login">
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

export default FormLogin;