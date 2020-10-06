import React from "react";
import { Link } from "react-router-dom";
import "../admin.css";

const AdminSidebar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 text-center h-100 sidebarMenu">
          <ul>
            <li>
              <Link className="active" to="/admin">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link to="/category">Kategoriler</Link>
            </li>
            <li>
              <Link to="/question">Sorular</Link>
            </li>

            <li>
              <a href="#about">Kullanıcılar</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
