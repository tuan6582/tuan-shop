import React, { useState, useContext } from 'react';

import { CartContext } from '../../Components/CartContext/CartContext';

function RenderCol9Navigation(props) {

    const [clickAddProduct, setClickAddProduct] = useState(false);

    const { setAddProductCart, setTotal } = useContext(CartContext)
    const { title, price, image } = props;

    const handleClickRender = () => {
        setClickAddProduct(true);
        const newItems = {
            title: title,
            price: price,
            image: image,
        };
        setAddProductCart((cart) => [...cart, newItems])
        setTotal((total) => total += Number(price));
    }


    return (
        <div className="right-category-item">
            <div className="right-category-image">
                <img src={image} alt="" width={'100%'} height={'300px'} />
            </div>
            <h3>{title}</h3>
            <span>{new Intl.NumberFormat().format(price)}đ</span>
            {clickAddProduct ? (<button>Đã thêm vào giỏ</button>) : (<button onClick={handleClickRender}>Thêm vào giỏ</button>)}
        </div>
    );
}

export default RenderCol9Navigation;