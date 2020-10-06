import React, { useState } from "react";
import toast from "izitoast";
import { login } from "../../service/kelimeApiService";
import { Link, useHistory } from "react-router-dom";

const AdminLogin = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const { email, password } = values;
  const history = useHistory();
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setValues((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      toast.warning({
        title: "HATA",
        message: "Email ve Password Alanları boş olamaz!",
        position: "topRight",
      });
    }
    login(email, password)
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
        localStorage.setItem("user", JSON.stringify(res.data));
        console.log("1-login");
        history.push("/admin");
      })
      .catch((err) => {
        toast.error({
          title: "HATA",
          message: "Email yada Şifreniz Hatalıdır",
          position: "topRight",
        });
      });
  };
  return (
    <div className="container flex-auto justify-content-center align-items-center mt-5">
      <div className="card">
        <div className="card-header text-center">Login</div>
        <div className="card-body">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
              <label>E-mail</label>
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
            <div className="form-group">
              <label>Şifre</label>
              <input
                type="password"
                name="password"
                className="form-control"
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-success" onClick={handleSubmit}>
                Giriş
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
