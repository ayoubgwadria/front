import React, { useEffect } from "react";

import Header from "../Header/Header.jsx";
/* import Footer from "../Footer/Footer.jsx"; */
import Routes from "../../routes/Routers";

import Carts from "../UI/cart/Carts.jsx";
import { useSelector } from "react-redux";
import axios from "axios";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  const token = useSelector((state) => state.login.token);
  useEffect(() => {
    if (!!token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, [token])
  return (
    <div>
      <Header />

      {showCart && <Carts />}

      <div>
        <Routes />
      </div>
      {/*  <Footer /> */}
    </div>
  );
};

export default Layout;
