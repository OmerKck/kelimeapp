import React, { useEffect, useState } from "react";

const GameHeader = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.user));
  }, []);
  return (
    <div className="row">
      <div
        className="col-md-12 d-flex justify-content-between align-center "
        style={{ backgroundColor: "#22a6b3" }}
      >
        <div className="col-md-6 d-flex justify-content-center align-center userCol">
          {" "}
          {/* <div>{puan}</div> */}
          <div
            className="rounded-circle  userImage"
            style={{ width: 100, height: 100, backgroundColor: "orange" }}
          >
            <img
              src="https://img.icons8.com/bubbles/100/000000/administrator-male.png"
              className="img-lg rounded-circle mb-2"
              alt="profile"
            />
          </div>
          <div className="d-flex justify-content-center align-items-center ml-3 text-center ">
            <label
              style={{
                backgroundColor: "#d1d8e0",
                minWidth: 100,
                minHeight: 30,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                borderRadius: 10,
              }}
            >
              {user?.name}
            </label>
          </div>
        </div>

        <div className="col-md-6 d-flex justify-content-center align-center">
          <div className="d-flex justify-content-center align-items-center mr-3">
            <label
              style={{
                backgroundColor: "#d1d8e0",
                minWidth: 100,
                minHeight: 30,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                borderRadius: 10,
              }}
            >
              Random Kullanıcı name
            </label>
          </div>
          <div
            className="rounded-circle userImage"
            style={{ width: 100, height: 100, backgroundColor: "orange" }}
          >
            <img
              src="https://img.icons8.com/bubbles/100/000000/indian-lady.png"
              className="img-lg rounded-circle mb-2"
              alt="profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameHeader;
