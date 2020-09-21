import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import toast from "izitoast";
import { login } from "../../service/kelimeApiService";



const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const { email, password } = values;
  const history = useHistory();

  //input Yakalama Method'u
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setValues((p) => ({ ...p, [name]: value }));
  };
  //form submit Method'u
  const handleSubmit = (e) => {
    e.preventDefault();
    //input validation
    if (email.trim() === "" || password.trim() === "") {
      toast.warning({
        title: "HATA",
        message: "Email ve Password Alanları boş olamaz!",
        position: "topRight",
      });
    }
    //Api service
    login(email, password)
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
        history.push("/");
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
    
    <div className="container">
      <div className="card mt-5 ">
        <div className="card-header text-center">Kelime Savaşı</div>
        <div className="card-body">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
              <label htmlFor="">E-mail</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email Giriniz"
                name="email"
                onChange={(e) => handleChangeInput(e)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Şifre</label>
              <input
                type="password"
                className="form-control"
                placeholder="Şifrenizi Giriniz"
                name="password"
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-success">Giriş</button>
            </div>
            <div className="form-group">
              Henüz Üye Değilmisiniz?
              <Link to="/register">Üye olmak için TIKLAYIN.</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
