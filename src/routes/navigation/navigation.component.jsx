import { Fragment, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Navigation = () => {
  const [active, setActive] = useState("Home");
  const navigateTo = (event) => {
    setActive(event.target.text || "Home");
  };
  return (
    <Fragment>
      <div className="navigation">
        <Link onClick={navigateTo} className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link
            onClick={navigateTo}
            className={"nav-link " + (active === "Home" ? "active" : "")}
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={navigateTo}
            className={"nav-link " + (active === "Shop" ? "active" : "")}
            to="/shop"
          >
            Shop
          </Link>
          <Link
            onClick={navigateTo}
            className={"nav-link " + (active === "About Us" ? "active" : "")}
            to="/about"
          >
            About Us
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
