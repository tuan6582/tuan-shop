import React, { useState, useEffect, useRef } from 'react';
import RenderCol9Navigation from '../RenderCol9Navigation/RenderCol9Navigation';
import './Col9Navigation.scss'

function Col9Navigation() {

    const [allProducts, setAllProducts] = useState([])

    const loadingRef = useRef()

    useEffect(() => {

        const getApiAllprocuts = async () => {
            const allProductsApi = await fetch('https://62618235327d3896e27cc529.mockapi.io/products/sanpham')
            const responseJSON = await allProductsApi.json();
            setAllProducts(responseJSON)
        }
        getApiAllprocuts()
            .finally(() => {
                setTimeout(() => {
                    loadingRef.current.style.display = 'none';
                }, 1000)
            })
    }, [])

    return (
        <>
            <div className="row">
                {
                    allProducts.map((product) => (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6" key={product.id}>
                            <RenderCol9Navigation
                                key={product.id}
                                title={product.title}
                                price={product.price}
                                image={product.image}
                            />
                        </div>
                    ))
                }
            </div>
            <div className="loading" ref={loadingRef}>
                <div className="loading-setTimeout"></div>
            </div>
        </>
    );
}

export default Col9Navigation;