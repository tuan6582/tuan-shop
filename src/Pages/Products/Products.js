import React from 'react';
import BackToTop from '../../Components/BackToTop/BackToTop';
import MenuTop from '../../Components/MenuTop/MenuTop';
import ProductNavigation from '../../Components/ProductNavigation/ProductNavigation';
import BannerProduct from '../../Container/BannerProduct/BannerProduct';
import BgProduct from '../../Container/BgProduct/BgProduct';
import Footer from '../../Container/Footer/Footer';
import ProductCategory from '../../Container/ProductCategory/ProductCategory';

function Products(props) {
    return (
        <div className="home-products">
            <MenuTop />
            <BgProduct />
            <ProductNavigation />
            <ProductCategory />
            <BannerProduct />
            <Footer />
            <BackToTop />
        </div>
    );
}

export default Products;