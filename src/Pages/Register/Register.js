import React from 'react';
import BackToTop from '../../Components/BackToTop/BackToTop';
import MenuTop from '../../Components/MenuTop/MenuTop';
import BgRegister from '../../Container/BgRegister/BgRegister';
import Footer from '../../Container/Footer/Footer';
import FormRegister from '../../Container/FormRegister/FormRegister';

function Register() {
    return (
        <div className="register">
            <MenuTop />
            <BgRegister />
            <FormRegister />
            <Footer />
            <BackToTop />
        </div>
    );
}

export default Register;