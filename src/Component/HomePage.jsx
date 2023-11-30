import Footer from "./footer.";
import Header from "./header";

export default function HomePage() {
    return (
        <>
    <div id="wrapper">
        <Header/>
        <div id="banner">
            <div class="box-left">
                <h2>
                    <span>Sovereign</span>
                    
                    <span>World Famous</span>
                </h2>
                <p>Ở đây chúng tôi không chỉ đơn giản là tranh,
                    chúng tôi bán đẳng cấp, nơi thẩm mĩ và sự đặc biệt,
                    tạo nên sự độc đáo về thẫm mĩ của bạn.
                </p>
                <button>Buy now</button>
            </div>
            <div class="box-right">
                <img src="../img/HomePage/BannerRight1.jpg" alt=""/>
                <img src="../img/HomePage/BannerRight2.jpg" alt=""/>
                <img src="../img/HomePage/BannerRight3.jpg" alt=""/>
            </div>
            <div class="to-bottom">
                <a href="">
                    <img src="../img/HomePage/to_bottom.png" alt=""/>
                </a>
            </div>
        </div>
    </div>
    <Footer/>
    </>
    );
}