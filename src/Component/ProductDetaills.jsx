import Footer from "./footer.";
import Header from "./header";

export default function ProductDetaills() {
    return (
        <div id="wrapper">
            <Header/>
    
            <div class="content_product">
                <div class="img_product">
                    <div class="img_product-item">
                        <img class="img_product-item-detail"
                            src="https://d7hftxdivxxvm.cloudfront.net/?height=660&quality=85&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FK4UdwXs31gn1-d6AkwlCiA%2Fmain.jpg&width=800"
                            alt=""/>
                    </div>
                </div>
         
                <div class="describe_product">
                    <div class="describe_product-name">
                        Milena Muzquiz
                    </div>
                    <div class="describe_product-nameDes">
                        Reincarnation United, 2023
                    </div>
                    <div class="describe_product-detail">
                        Oil on canvas
                        
                        22 4/5 × 28 3/10 in | 58 × 72 cm
                        <div class="tag">
                            <li>Unique work</li>
                            <li>Includes a Certificate of Authenticity</li>
                        </div>
                    </div>
                    <div class="describe_product-price">
                        490,000₫
                    </div>
                    <div class="cart">
                        <button class="describe_product-pay">
                            Thêm vào giỏ hàng
                        </button>
                        <button class="describe_product-pay">
                            Đặt hàng
                        </button>
                    </div>
                </div>
            </div>
    
            <Footer/>
        </div>
);
}