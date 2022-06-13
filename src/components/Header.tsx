import React, { useContext, useState } from "react";
import "../styles/components/header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faBarsStaggered,
  faCaretDown,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import navbarLogo from "../assets/menu.png";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import AppContext from "../context/AppContext";
import MyOrder from "../containers/MyOrder";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const { isAccountNavbarOpen, setIsAccountNavbarOpen } =
    useContext(AppContext);
  const { toggleOrders, setToggleOrders } = useContext(AppContext);
  const { state } = useContext(AppContext);

  return (
    <nav className="navbar">
      <button className="navbar-button">
        <FontAwesomeIcon
          icon={faBarsStaggered}
          onClick={() => {
            setIsNavbarOpen(!isNavbarOpen);
          }}
        />
      </button>

      <Link to="/" className="navbar-header">
        <img src={navbarLogo} alt="YARD-Sale" className="navbar-header-logo" />
        <div className="navbar-header-title">
          <span>YARD </span>
          <span> Sale</span>
        </div>
      </Link>

      <section className="navbar-list">
        <ul>
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/">Clothes</Link>
          </li>
          <li>
            <Link to="/">Electronics</Link>
          </li>
          <li>
            <Link to="/">Furnitures</Link>
          </li>
          <li>
            <Link to="/">Toys</Link>
          </li>
          <li>
            <Link to="/">Others</Link>
          </li>
        </ul>
      </section>

      <section className="navbar-right">
        <ul>
          <li className="navbar-email">
            <button
              onClick={() => {
                setToggleOrders(false)
                setIsAccountNavbarOpen(!isAccountNavbarOpen);
              }}
              className="navbar-email-button"
            >
              jofayzs19@gmail.com
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {isAccountNavbarOpen && <Menu />}
          </li>
          {toggleOrders && <MyOrder />}
          <li
            className="navbar-shopping-cart"
            onClick={() => {
              setIsAccountNavbarOpen(false);
              setToggleOrders(!toggleOrders);
            }}
          >
            <FontAwesomeIcon icon={faCartPlus} />
            <div style={{ fontSize: "12px" }}>
              {state.cart.length > 0 ? (
                state.cart.length
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </div>
          </li>
        </ul>
      </section>
      {isNavbarOpen && <ResponsiveNavbar />}
    </nav>
  );
};

export default Header;
