import React from 'react';
import { Link } from 'react-router-dom';
import './RenderProducts.scss';




function RenderProducts(props) {


    const { title, imageUrl } = props;


    return (
        <div className="product-item" >
            <Link to="/sanpham">
                <div className="product-image">
                    <img src={imageUrl} alt="" height={450} width={'100%'} />
                </div>
                <div className="info-product">
                    <h3>{title}</h3>
                </div>
            </Link>
            <div className="buy-product">
                <span>Bán chạy nhất</span>
                <Link to="/sanpham"> <button>Xem chi tiết</button></Link>
            </div>
        </div>
    );
}

export default RenderProducts;