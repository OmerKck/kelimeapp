import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";

const Home = () => {
  const [user, setuser] = useState("");
  useEffect(() => {
    if (localStorage.user) {
      setuser(JSON.parse(localStorage.user));
    }
  }, []);
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
