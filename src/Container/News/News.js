import React from 'react';
import './News.scss'

function News() {
    return (
        <div className="news">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="popular-text">
                            <h3 className="title">Tin Tức</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-sm-6 col-md-6 col-12">
                        <div className="news-left">
                            <div className="news-left-image">
                                <img src="https://bizweb.dktcdn.net/100/434/926/articles/1556164314-967-avar-an-1556101437-width640height480.jpg?v=1629006171043" alt="" />
                            </div>
                            <div className="news-left-text">
                                <h3>Mẫu Tây Andrea chuộng váy ngủ xuyên thấu</h3>
                                <p>Andrea Aybar là người mẫu gốc Tây Ba Nha. Nhưng từ khi còn rất nhỏ, cô đã cùng gia đình chuyển tới Việt Nam sinh sống và làm việc. Vì thế, Việt Nam được coi như là quê hương thứ 2 của nàng mẫu xin...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="news-right">
                                    <div className="news-right-image">
                                        <img src="https://bizweb.dktcdn.net/100/434/926/articles/image001a.jpg?v=1629005966930" alt="" />
                                    </div>
                                    <div className="news-right-text">
                                        <h3>8 mẹo giúp bạn chọn quần jean trong mơ mà không cần đến shop</h3>
                                        <p>Để biết được quần jean có vừa với mình hay không theo kích cỡ, bạn không cần phải đứng xếp hàng trong phòng thử đồ. Tất cả những gì bạn cần làm là cài nút chúng và áp vào vòng eo từ rốn đến cột số...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="news-right">
                                    <div className="news-right-image">
                                        <img src="https://bizweb.dktcdn.net/100/434/926/articles/imager-1-24517-700.jpg?v=1629005698983" alt="" />
                                    </div>
                                    <div className="news-right-text">
                                        <h3>Học lỏm 10 bí quyết từ các stylist hàng đầu để mặc đẹp mà không tốn quá nhiều tiền</h3>
                                        <p> Nếu bạn muốn chân trông dài hơn, hãy mang một đôi guốc cùng màu da của mình. Chúng đánh lừa thị giác khiến bạn trông thanh mảnh và cao hơn. Cách tốt nhất để bảo quản đồ trang sức là bỏ vào..</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="news-right">
                                    <div className="news-right-image">
                                        <img src="https://bizweb.dktcdn.net/100/434/926/articles/xu-huong-thoi-trang-2.jpg?v=1629005492067" alt="" />
                                    </div>
                                    <div className="news-right-text">
                                        <h3>Một cô nàng ăn mặc chất, ngoài khả năng bắt trend còn tuân thủ 4 nguyên tắc này</h3>
                                        <p>Những bộ đồ ôm sát body giúp tôn lên đường cong nhưng mặc một chiếc đầm bó chật quá mức hoặc chiếc quần jeans siêu skinny với mong muốn khoe dáng nuột sẽ khiến bạn thất bại. Nó vừa khiến bạn khó d...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;