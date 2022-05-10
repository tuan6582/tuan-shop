import React from 'react';
import Col3Navigation from '../Col3Navigation/Col3Navigation';
import Col9Navigation from '../Col9Navigation/Col9Navigation';

function ProductCategory() {
    return (
        <div className="product-category">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-12">
                        <Col3Navigation />
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-8 col-sm-8 col-12">
                        <Col9Navigation />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCategory;