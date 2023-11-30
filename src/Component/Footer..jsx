export default function Footer() {
  return (
    <div id="footer">
      <div class="footerLeft">
        <div class="footerFirst">
          <div class="footerFirstLogo">
            <img width="100px" src="../img/Sovereign_Logo.jpg" alt="" />
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
  );
}