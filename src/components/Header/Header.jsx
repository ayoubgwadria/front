import React, { useRef } from "react";

import { Container } from "reactstrap";
import logo from "../../assets/images/logo_web.png";
import work from "../../assets/images/work.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/auth/LoginSlice";
import { cartUiActions } from "../../store/cart/cartUiSlice";

import "../../styles/header.css";



const Header = () => {
  const clientId = useSelector((state) => state.login.id)
  const token = useSelector((state) => state.login.token);
  const usertype = useSelector((state) => state.login.user);
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = "1";
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  const handleDisconnect = () => {
    dispatch(logout());
  };
  const nav__Client = [
    {
      display: "Accueil",
      path: "/home",
    },
    {
      display: "Techniciens",
      path: "/technicien",
    },
    {
      display: "Mes Publications",
      path: `/clientposts/${clientId}`,
    },
    {
      display: "contrat",
      path: "/cart",
    },
  ];
  const nav__Tech = [
    {
      display: "Accueil",
      path: "/home",
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
  const nav__Guest = [
    {
      display: "Accueil",
      path: "/home",
    },
    {
      display: "Emplois",
      path: "/emplois",
    },
    {
      display: "Techniciens",
      path: "/technicien",
    },
    {
      display: "contrat",
      path: "/cart",
    },
  ];
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" width="100" height="100" />
          </div>
          {usertype === "client" ?
            (
              <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                <div className="menu d-flex align-items-center gap-5">
                  {nav__Client.map((item, index) => (
                    <NavLink
                      to={item.path}
                      key={index}
                      className={(navClass) => navClass.isActive ? "active__menu" : ""}
                    >
                      {item.display}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              usertype === "Technicien" ?
                (
                  <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                    <div className="menu d-flex align-items-center gap-5">
                      {nav__Tech.map((item, index) => (
                        <NavLink
                          to={item.path}
                          key={index}
                          className={(navClass) => navClass.isActive ? "active__menu" : ""}
                        >
                          {item.display}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                    <div className="menu d-flex align-items-center gap-5">
                      {nav__Guest.map((item, index) => (
                        <NavLink
                          to={item.path}
                          key={index}
                          className={(navClass) => navClass.isActive ? "active__menu" : ""}
                        >
                          {item.display}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )
            )}


          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <img src={work} alt="logo" width="20" height="20" />
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            {token ? (
              <span className="user">
                <Link to="/login" onClick={handleDisconnect}>
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
