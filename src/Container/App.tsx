import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Header, Footer } from "../Components/Layout/index";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ShoppingCart from "../Components/Page/ShoppingCart";
import MenuItemDetail from "../Pages/MenuItemDetail";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetShoppingCartQuery } from "../apis/shoppingCartApi";
import { setShoppingCart } from "../Storage/Redux/shoppingCartSlice";
function App() {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetShoppingCartQuery(
    "a2283b26-1086-4ec6-b72e-7ba985f50494"
  );
  useEffect(() => {
    if (!isLoading) {
      console.log(data.result);
      dispatch(setShoppingCart(data.result?.cartItems));
    }
  }, [data]);
  return (
    <>
      <Header />
      <main className="pb-5" style={{ paddingTop: "100px" }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/menuItemDetails/:menuItemId"
            element={<MenuItemDetail />}
          ></Route>
          <Route path="/shoppingCart" element={<ShoppingCart />}></Route>
          <Route path="/" element={<></>}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
