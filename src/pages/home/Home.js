import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SideBar from "../../components/SideBar";
import { getUsers } from "../../service/kelimeApiService";

const Home = () => {
  const history = useHistory();
  const [user, setuser] = useState(null);

  useEffect(() => {
    if (localStorage.user) {
      const usr = JSON.parse(localStorage.user);
      setuser(usr);

      getUsers(usr.id)
        .then((res) =>
          setuser((prev) => ({ ...prev, profile: res.data.data.profile }))
        )
        .catch((err) => console.log(err));
    }
  }, []);

  const handleSubmit = () => {
    history.push("/game");
  };
  return (
    <div className="container m-0 p-0">
      <div className="row">
        <div className="col-md-4">{user && <SideBar user={user} />}</div>
        <div className="container col-md-8">
          <div className="row ">
            <div
              className="col-md-12  "
              style={{
                border: "1px solid blue",
                borderRadius: "10px",
                backgroundColor: "#1D3795",
                minHeight: "70px",
                alignContent: "center",
              }}
            >
              <div>
                <img
                  src={require("../../assets/images/Kelimeparasi.png")}
                  width="30px"
                />
                <label
                  style={{
                    border: "1px solid orange",
                    color: "black",
                    minWidth: "60px",
                    textAlign: "center",
                    backgroundColor: "orange",
                    borderRadius: 10,
                    fontFamily: "monospace",
                  }}
                >
                  100
                </label>
              </div>
            </div>
          </div>

          <div
            className="row  d-flex justify-content-center text-align-center"
            style={{ height: "400px", backgroundColor: "#C2EAF3" }}
          >
            <div className="col-md-4 d-flex justify-content-center align-center">
              <div
                className="rounded-circle mt-4 "
                style={{ width: 100, height: 100, backgroundColor: "orange" }}
              >
                <img
                  src="https://img.icons8.com/bubbles/100/000000/administrator-male.png"
                  className="img-lg rounded-circle mb-2"
                  alt="profile"
                />
                <label className="d-flex justify-content-center align-center">
                  Level 10
                </label>
                <br />
                <label className="d-flex justify-content-center align-center">
                  {user?.name}
                </label>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-center">
              <div
                className="rounded-circle mt-4"
                style={{ width: 100, height: 90 }}
              >
                <img
                  src={require("../../assets/images/kelimeVS.png")}
                  className="img-lg rounded-circle mb-2"
                  alt="profile"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-center">
              <div
                className="rounded-circle mt-4 text-center"
                style={{ width: 100, height: 100, backgroundColor: "orange" }}
              >
                <img
                  src="https://img.icons8.com/bubbles/100/000000/indian-lady.png"
                  className="img-lg rounded-circle mb-2"
                  alt="profile"
                  width="100%"
                  height="100%"
                />
                <label className="d-flex justify-content-center align-center">
                  Level 10
                </label>
                <br />
                <label className="d-flex justify-content-center align-center ">
                  random kullanıcı
                </label>
              </div>
            </div>
            <div className="row justify-content-center text-align-center">
              <div className="col-md-12 ">
                <button
                  className="btn btn-amber"
                  style={{ color: "black" }}
                  onClick={handleSubmit}
                >
                  Oyuncu Bul
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
