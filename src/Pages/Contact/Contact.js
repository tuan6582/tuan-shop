import React, { useRef } from 'react';
import BackToTop from '../../Components/BackToTop/BackToTop';
import MenuTop from '../../Components/MenuTop/MenuTop';
import BgContact from '../../Container/BgContact/BgContact';
import ContactBody from '../../Container/ContactBody/ContactBody';
import ContactMap from '../../Container/ContactMap/ContactMap';
import Footer from '../../Container/Footer/Footer';

function Contact(props) {

    const loadingRef = useRef();

    const loadingPage = () => {
        setTimeout(() => {
            loadingRef.current.style.display = 'none';
        }, 1000)
    }

    loadingPage()

    return (
        <React.Fragment>
            <MenuTop />
            <div className="contact">

                <BgContact />

                <ContactBody />

                <ContactMap />
                <Footer />
                <BackToTop />
                <div className="loading" ref={loadingRef}>
                    <div className="loading-setTimeout"></div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Contact;