import React, { useRef } from "react";

import { Container } from "reactstrap";
import logo from "../../assets/images/logo.png";
import work from "../../assets/images/work.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/auth/LoginSlice";
import { cartUiActions } from "../../store/cart/cartUiSlice";

import "../../styles/header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Techniciens",
    path: "/technicien",
  },
  {
    display: "Emplois",
    path: "/emplois",
  },

  {
    display: "contrat",
    path: "/cart",
  },
];

const Header = () => {
  const token = useSelector((state) => state.login.token);
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  const handleDisconnect = () => {
    dispatch(logout());
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" width="60" height="50" />
            <h5>ClickJob</h5>
          </div>

          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <img src={work} alt="logo" width="20" height="20" />
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            {token ? (
              <span className="user">
                <Link to="/login" onClick={handleDisconnect}>
                  {console.log(token)}
                  <i className="ri-logout-box-r-line"></i>
                </Link>
              </span>
            ) : (
              <span className="user">
                <Link to="/login">
                  <i className="ri-user-line"></i>
                </Link>
              </span>
            )}
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
