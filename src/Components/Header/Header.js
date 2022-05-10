import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Cart from '../../Pages/Cart/Cart';
import Contact from '../../Pages/Contact/Contact';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Products from '../../Pages/Products/Products';
import Register from '../../Pages/Register/Register';
import { CartContext } from '../CartContext/CartContext';
import '../Header/Header.scss';



function Header() {

    function ScrollToTop() {
        const { pathname } = useLocation(true);
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    }

    ScrollToTop()

    const [addProductCart, setAddProductCart] = useState([{}])
    const [total, setTotal] = useState(0)

    return (

        <>
            <CartContext.Provider
                value={{ addProductCart, setAddProductCart, total, setTotal }}
            >
                <Routes>
                    <Route path="*" element={<Home />} />
                    <Route path="/sanpham" element={<Products />} />
                    <Route path="/lienhe" element={<Contact />} />
                    <Route path="/giohang" element={<Cart />} />
                    <Route path="/dangnhap" element={<Login />} />
                    <Route path="/dangky" element={<Register />} />
                </Routes>
            </CartContext.Provider>
        </>
    );
}

export default Header;