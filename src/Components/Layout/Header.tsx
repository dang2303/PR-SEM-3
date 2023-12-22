import React from "react";
import "../css/header2.css";
import { NavLink } from "react-router-dom";
import cartItemModel from "../../Interface/cartItemModel";
import { useSelector } from "react-redux";
import { RootState } from "../../Storage/Redux/store";
function Header() {
  const shoppingCartFromStore: cartItemModel[] = useSelector(
    (state: RootState) => state.shoppingCartStore.cartItems ?? []
  );

  return (
    <div className="header">
      <div className="nav">
        <div className="logo">
          <NavLink to="/">CompanyLogo</NavLink>
        </div>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search by artist, gallery, style, theme, etc."
          />
          <a href="#search" style={{ color: "black" }}>
            <i className="bi bi-search"></i>
          </a>
        </div>
        <NavLink to="/shoppingCart" style={{ color: "black" }}>
          <i className="bi bi-cart"></i>
          {shoppingCartFromStore?.length
            ? `(${shoppingCartFromStore.length})`
            : ""}
        </NavLink>
        <a href="#about" style={{ color: "black" }}>
          Sell
        </a>
        <a href="#about" style={{ color: "black" }}>
          Price Database
        </a>
        <a href="#about" style={{ color: "black" }}>
          <i className="bi bi-bell"></i>
        </a>
        <a href="#about" style={{ color: "black" }}>
          <i className="bi bi-envelope"></i>
        </a>
        <a className="test" href="#about" style={{ color: "black" }}>
          <i className="bi bi-person"></i>
          <ul className="submenu">
            <li>
              <a href="#">
                <i className="bi bi-bag"></i> My Collection
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-heart"></i> Saves
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-people"></i> Follows
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-bell"></i> Aleart
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-gear"></i> Settings
              </a>
            </li>

            <li>
              <a href="#">
                <i className="bi bi-power"></i> Log out
              </a>
            </li>
          </ul>
        </a>
      </div>
      <div className="nav">
        <div className="nav2">
          <a href="#">Artist</a>
          <a href="#">ArtWork</a>
          <a href="#">Auctions</a>
          <a href="#">Viewing Rooms</a>
          <a href="#">Galleries</a>
          <a href="#">Fairs</a>
          <a href="#">Shows</a>
          <a href="#">Museums</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
