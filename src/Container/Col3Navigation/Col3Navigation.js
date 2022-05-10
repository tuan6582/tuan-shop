import React from 'react';
import { NavLink } from 'react-router-dom';
import './Col3Navigation.scss'


function Col3Navigation() {
    return (
        <div className="page-navigation-left">
            <div className="left-top">
                <h3>Danh Mục</h3>
                <ul className="left-top-list">
                    <li><NavLink activeclassname="active" to="/">Trang Chủ</NavLink></li>
                    <li><NavLink activeclassname="active" to="/sanpham">Sản Phẩm</NavLink></li>
                    <li><NavLink activeclassname="active" to="/lienhe">Liên Hệ</NavLink></li>
                    <li><NavLink activeclassname="active" to="/giohang">Giỏ Hàng</NavLink></li>
                    <li><NavLink activeclassname="active" to="/dangnhap">Đăng Nhập</NavLink></li>
                    <li><NavLink activeclassname="active" to="/dangky">Đăng Ký</NavLink></li>
                </ul>
                <h3 className="text-md-center text-sm-center">Loại Sản Phẩm</h3>
                <ul className="left-top-list">
                    <div className="group-item">
                        <input type="checkbox" name="" id="snapback" />
                        <label htmlFor="snapback">Mũ Snapback</label>
                    </div>
                    <div className="group-item">
                        <input type="checkbox" name="" id="vay" />
                        <label htmlFor="vay">Váy</label>
                    </div>

                    <div className="group-item">
                        <input type="checkbox" name="" id="dam" />
                        <label htmlFor="dam">Đầm</label>
                    </div>
                    <div className="group-item">
                        <input type="checkbox" name="" id="aosomi" />
                        <label htmlFor="aosomi">Áo sơ mi</label>
                    </div>
                    <div className="group-item">
                        <input type="checkbox" name="" id="aothun" />
                        <label htmlFor="aothun">Áo thun</label>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Col3Navigation;