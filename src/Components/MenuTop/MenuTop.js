import React, { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoShop from '../../tuan-shop.png';
import DarkMode from '../DarkMode/DarkMode';
import LightMode from '../LightMode/LightMode';

function MenuTop() {

    const [darkMode, setDarkMode] = useState(false);

    const [color, setColor] = useState(false);

    const boxMenuRef = useRef();

    const overlayMenu = useRef();


    const handleMobileShow = () => {
        boxMenuRef.current.style.transform = 'translateX(0)';
        boxMenuRef.current.style.opacity = 1;
        overlayMenu.current.style.display = 'block';
        overlayMenu.current.style.opacity = 1;

    }

    const handleMobileHide = () => {
        boxMenuRef.current.style.transform = 'translateX(-100%)';
        boxMenuRef.current.style.opacity = 0;
        overlayMenu.current.style.display = 'none';
        overlayMenu.current.style.opacity = 0;
    }

    const handleDarkMode = () => {
        setDarkMode(!darkMode)
        setColor(!color)

    }

    return (
        <React.Fragment>
            <header className="header-app">
                <div className="container">
                    <div className="row" style={{ alignItems: 'center' }}>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="header-title">
                                <Link to="/">
                                    <img src={logoShop} alt="" width={250} height={60} />
                                </Link>
                                <div className="icon-mobile" onClick={handleMobileShow}>
                                    <i className="fa-solid fa-bars-staggered"></i>
                                </div>
                                <div className="icon-mode" onClick={handleDarkMode} style={{
                                    fontSize: '3rem',
                                    cursor: 'pointer',
                                    color: color ? '#b18b8b' : '#fff'
                                }}>
                                    <i className="fa-solid fa-moon"></i>
                                    {darkMode ? <DarkMode /> : <LightMode />}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                            <ul className="list-menu" >
                                <li className="list-menu-item">
                                    <NavLink activeclassname="active" to="/">
                                        Trang Chủ</NavLink>
                                </li>
                                <li className="list-menu-item">
                                    <NavLink activeclassname="active" to="/sanpham">Sản Phẩm</NavLink>
                                </li>
                                <li className="list-menu-item">
                                    <NavLink activeclassname="active" to="/lienhe">Liên Hệ</NavLink>
                                </li>
                                <li className="list-menu-item">
                                    <NavLink activeclassname="active" to="/giohang">Giỏ Hàng</NavLink>
                                </li>
                                <li className="list-menu-item">
                                    <NavLink activeclassname="active" to="/dangnhap">Đăng Nhập</NavLink>
                                </li>
                                <li className="list-menu-item">
                                    <NavLink activeclassname="active" to="/dangky">Đăng Ký</NavLink>
                                </li>
                                <li className="list-menu-item">
                                    <div onClick={handleDarkMode} style={{
                                        fontSize: '3rem',
                                        cursor: 'pointer',
                                        color: color ? '#b18b8b' : '#fff'
                                    }}>
                                        <i className="fa-solid fa-moon"></i>
                                        {darkMode ? <DarkMode /> : <LightMode />}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </header>

            <div className="menu-mobile" ref={boxMenuRef}>
                <ul className="list-menu" >
                    <li className="list-menu-item">
                        <NavLink activeclassname="active" to="/">
                            Trang Chủ</NavLink>
                    </li>
                    <li className="list-menu-item">
                        <NavLink activeclassname="active" to="/sanpham">Sản Phẩm</NavLink>
                    </li>
                    <li className="list-menu-item">
                        <NavLink activeclassname="active" to="/lienhe">Liên Hệ</NavLink>
                    </li>
                    <li className="list-menu-item">
                        <NavLink activeclassname="active" to="/giohang">Giỏ Hàng</NavLink>
                    </li>
                    <li className="list-menu-item">
                        <NavLink activeclassname="active" to="/dangnhap">Đăng Nhập</NavLink>
                    </li>
                    <li className="list-menu-item">
                        <NavLink activeclassname="active" to="/dangky">Đăng Ký</NavLink>
                    </li>
                </ul>
            </div>
            <div className="overlay-mobile" ref={overlayMenu} onClick={handleMobileHide}></div>

        </React.Fragment>
    );
}

export default MenuTop;