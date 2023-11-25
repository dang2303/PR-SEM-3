export default function ProductDetaills() {
    return (
        <div id="wrapper">
            <div id="header">
                <a href="./HomePage.html" class="logo">
                    <img width="100px" src="../img/Sovereign_Logo.jpg" alt=""/>
                </a>
                <div id="menu">
                    <div class="item">
                        <a  href="./HomePage.html">Trang chủ</a>
                    </div>
                    <div class="item dropdown">
                        <a href="./Product.html">Sản phẩm</a>
                        <div class="submenu">
                            <div class="columnLeft">
                                <a href="#"><b>New from Galleries</b></a>
                                <a href="#">New from Leading</a>
                                <a href="#">New from Tastemaking Galleries</a>
                                <a href="#">New from Small Galleries</a>
                            </div>
                            <div class="columnRight">
                                <a href="#"><b>New from Galleries</b></a>
                                <a href="#">New from Leading</a>
                                <a href="#">New from Tastemaking Galleries</a>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <a href="./Introduce.html">Giới thiệu</a>
                    </div>
                    <div class="item">
                        <a href="./Contact.html">Liên hệ</a>
                    </div>
                </div>
                <div id="actions">
                    <div class="item">
                        <div class="input-container">
                            <input required="" id="input" type="text"/>
                            <label class="label" for="input">Search...</label>
                            <div class="underline"></div>
                            <div class="sideline"></div>
                            <div class="upperline"></div>
                            <div class="line"></div>
                        </div>
                    </div>
                    <div class="item">
                        <a href="./Login.html">
                            <img src="../img/assets/user.png" alt=""/>
                        </a>
                    </div>
                    <div class="item">
                        <a href="./Cart.html">
                            <img src="../img/assets/cart.png" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
    
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
    
            <div id="footer">
                <div class="footerLeft">
                    <div class="footerFirst">
                        <div class="footerFirstLogo">
                            <img width="100px" src="../img/Sovereign_Logo.jpg" alt=""/>
                        </div>
                        <div class="footerFirstAddress">
                            <ion-icon name="home"></ion-icon>
                            <a href="https://maps.app.goo.gl/GAJEFtTZGwFQFodi9" target="_blank">38 Yên Bái, Hải Châu 1, Hải Châu, Đà Nẵng</a>
                        </div>
                        <div class="footerFirstBotHotline">
                            <ion-icon name="call"></ion-icon>
                            <a href="./Contact.html" target="_blank">086 913 2529 - 038 987 6510</a>
                        </div>
                
                        <div class="footerFirstBotEmail">
                            <ion-icon name="mail"></ion-icon>
                            <a href="mailto:sovereign.cc2023@gmail.com">sovereign.cc2023@gmail.com</a>
                        </div>
                    </div>
        
                    <div class="footerSecond">
                        <div class="footerSecondTop">
                            <h3>THÔNG TIN</h3>
                        </div>
                        <div class="footerSecondBot">
                            <ul>
                                <li><a href="./HomePage.html" target="_blank">Trang chủ</a></li>
                                <li><a href="./Product.html" target="_blank">Sản phẩm</a></li>
                                <li><a href="./Introduce.html" target="_blank">Giới thiệu</a></li>
                                <li><a href="./Contact.html" target="_blank">Liên hệ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footerRight">
                    <div class="footerSocial">
                        <h4>CHÚNG TÔI TRÊN MẠNG XÃ HỘI</h4>
                        <div class="listSocial">
                            <a href="https://www.facebook.com/" target="_blank" class="socialIcon">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" class="socialIcon">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                            <a href="https://www.youtube.com" target="_blank" class="socialIcon">
                                <ion-icon name="logo-youtube"></ion-icon>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
}