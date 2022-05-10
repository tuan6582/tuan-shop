import React from 'react';
import './PhotoLibrary.scss'

function PhotoLibrary() {
    return (
        <div className="photo-library">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="popular-text">
                            <h3 className="title">Thư Viện Ảnh</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="photo-item">
                                    <img src="https://images.pexels.com/photos/1188748/pexels-photo-1188748.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="photo-item">
                                    <img src="https://images.pexels.com/photos/1790028/pexels-photo-1790028.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="photo-item">
                                    <img src="https://images.pexels.com/photos/1793490/pexels-photo-1793490.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="photo-item">
                                    <img src="https://images.pexels.com/photos/1760695/pexels-photo-1760695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                        <div className="photo-item">
                            <img src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoLibrary;