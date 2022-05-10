import React from 'react';
import { Link } from 'react-router-dom';
import './RenderFashionHat.scss';

function RenderFashionHat(props) {


    const { title, url } = props;

    return (
        <div className="product-fashion-item">
            <div className="product-item-image">
                <img className="fashion-img" src={url} alt="" width={'100%'} height={'100%'} />
            </div>
            <div className="fashion-item-info">
                <h3>{title}</h3>
                <span>Liên Hệ</span>
                <Link to="/sanpham">
                    <button>Xem chi tiết</button>
                </Link>
            </div>
        </div>
    );
}

export default RenderFashionHat;