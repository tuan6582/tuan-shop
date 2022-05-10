import React, { useEffect, useState } from 'react';
import RenderFashionHat from '../RenderFashionHat/RenderFashionHat';



function FashionHatApi() {

    const [hats, setHat] = useState([])

    useEffect(() => {

        const getApiHat = async () => {
            const apiHat = await fetch('https://62618235327d3896e27cc529.mockapi.io/products/product-hat');
            const responseJSON = await apiHat.json();
            setHat(responseJSON)
        }

        getApiHat()

    }, [])


    return (
        <div className="product-fashion">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="popular-text">
                            <h3 className="title">Thời Trang</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {hats.map((hat) => (
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6" key={hat.id}>
                            <RenderFashionHat key={hat.id} title={hat.title} price={hat.price} url={hat.url} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FashionHatApi;