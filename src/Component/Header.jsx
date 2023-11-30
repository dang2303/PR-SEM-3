export default function Header() {
  return (
    <div id="header">
      <a href="./HomePage.jsx" class="logo">
        <img width="100px" src="../img/Sovereign_Logo.jpg" alt="" />
      </a>
      <div id="menu">
        <div class="item">
          <a href="./HomePage.jsx">Trang chủ</a>
        </div>
        <div class="item dropdown">
          <a href="./Product.jsx">Sản phẩm</a>
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
          <a href="./Introduce.jsx">Giới thiệu</a>
        </div>
        <div class="item">
          <a href="./Contact.jsx">Liên hệ</a>
        </div>
      </div>
      <div id="actions">
        <div class="item">
          <div class="input-container">
            <input required="" id="input" type="text" />
            <label class="label" for="input">Search...</label>
            <div class="underline"></div>
            <div class="sideline"></div>
            <div class="upperline"></div>
            <div class="line"></div>
          </div>
        </div>
        <div class="item">
          <a href="./Login.jsx">
            <img src="../img/assets/user.png" alt="" />
          </a>
        </div>
        <div class="item">
          <a href="./Cart.jsx">
            <img src="../img/assets/cart.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}