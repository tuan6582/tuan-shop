import React from 'react';
import BackToTop from '../../Components/BackToTop/BackToTop';
import MenuTop from '../../Components/MenuTop/MenuTop';
import ProductNavigation from '../../Components/ProductNavigation/ProductNavigation';
import Service from '../../Components/Service/Service';
import Slider from '../../Components/Slider/Slider';
import FashionHatApi from '../../Container/FashionHatApi/FashionHat';
import Footer from '../../Container/Footer/Footer';
import News from '../../Container/News/News';
import PhotoLibrary from '../../Container/PhotoLibrary/PhotoLibrary';
import ProductPopularApi from '../../Container/ProductPopularApi/ProductPopular';
import Review from '../../Container/Review/Review';

function Home(props) {
    return (
        <div className="Home">
            <MenuTop />
            <Slider />
            <ProductNavigation />
            <Service />
            <ProductPopularApi />
            <FashionHatApi />
            <Review />
            <PhotoLibrary />
            <News />
            <Footer />
            <BackToTop />
        </div>
    );
}

export default Home;