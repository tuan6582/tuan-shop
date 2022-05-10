import React, { useEffect, useState } from 'react';
import './BackToTop.scss';


function BackToTop() {

    const [goToTop, setGoToTop] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 200) {
                setGoToTop(true);
            } else {
                setGoToTop(false);
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {

            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <React.Fragment>
            {
                goToTop
                &&
                <div className="back-to-top">
                    <a href="#">
                        <i className="fa-solid fa-angles-up"></i>
                    </a>
                </div>
            }
        </React.Fragment>
    );
}

export default BackToTop;