import React from "react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

const user = JSON.parse(localStorage.user);

const Home = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <SideBar user={user} />
        </div>
        <div className="col-md-9">
          <p>Content</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
