import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("2-header");

    if (localStorage.user) {
      console.log("ife girdi");
      setName(JSON.parse(localStorage.user).name);
    }
    console.log("finish");
  }, [name]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setName("kullanıcı");
    history.push("/login");
  };

  return (
    <nav className="mb-1 navbar navbar-expand-lg navbar-dark primary-color darken-2">
      <a className="navbar-brand" href="!#">
        Kelime Savaşı
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent-555"
        aria-controls="navbarSupportedContent-555"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="!#">
              Anasayfa
              <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto nav-flex-icons">
          <li className="nav-item">
            <a className="nav-link waves-effect waves-light">
              1
              <i className="fas fa-envelope" />
            </a>
          </li>
          <li className="nav-item avatar dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink-55"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {name && name}
            </a>
            <div
              className="dropdown-menu dropdown-menu-lg-right dropdown-secondary"
              aria-labelledby="navbarDropdownMenuLink-55"
            >
              <a className="dropdown-item" onClick={handleLogout}>
                Çıkış
              </a>
              <a className="dropdown-item" href="!#">
                Another action
              </a>
              <a className="dropdown-item" href="!#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
