import { Fragment, useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Navigation = () => {
  const [active, setActive] = useState("");
  useEffect(() => {
    const { pathname } = window.location;
    switch (pathname) {
      case "/auth":
        setActive("AUTH");
        break;
      case "/shop":
        setActive("SHOP");
        break;
      case "/contact":
        setActive("CONTACT US");
        break;
      case "/":
        setActive("HOME");
        break;

      default:
        setActive("");
        break;
    }
  }, []);

  return (
    <Fragment>
      <div className="navigation">
        <Link
          onClick={() => setActive("HOME")}
          className="logo-container"
          to="/"
        >
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link
            onClick={() => setActive("HOME")}
            className={`nav-link ${active === "HOME" ? "active" : ""}`}
            to="/"
          >
            HOME
          </Link>
          <Link
            onClick={() => setActive("SHOP")}
            className={`nav-link ${active === "SHOP" ? "active" : ""}`}
            to="/shop"
          >
            SHOP
          </Link>
          <Link
            onClick={() => setActive("CONTACT US")}
            className={`nav-link ${active === "CONTACT US" ? "active" : ""}`}
            to="/contact"
          >
            CONTACT US
          </Link>
          <Link
            onClick={() => setActive("AUTH")}
            className={`nav-link ${active === "AUTH" ? "active" : ""}`}
            to="/auth"
          >
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
