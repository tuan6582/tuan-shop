import React from 'react';
import BackToTop from '../../Components/BackToTop/BackToTop';
import MenuTop from '../../Components/MenuTop/MenuTop';
import BgLogin from '../../Container/BgLogin/BgLogin';
import Footer from '../../Container/Footer/Footer';
import FormLogin from '../../Container/FormLogin/FormLogin';

function Login(props) {
    return (
        <div className="login">
            <MenuTop />
            <BgLogin />
            <FormLogin />
            <Footer />
            <BackToTop />
        </div>
    );
}

export default Login;