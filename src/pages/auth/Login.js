import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import toast from "izitoast";
import { login } from "../../service/kelimeApiService";

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const { email, password } = values;
  const history = useHistory();

  const [log, setLogin] = useState("hidden");

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
    // <div className="container">
    //   <div className="card mt-5 ">
    //     <div className="card-header text-center">Kelime Savaşı</div>
    //     <div className="card-body">
    //       <form onSubmit={(e) => handleSubmit(e)}>
    //         <div className="form-group">
    //           <label htmlFor="">E-mail</label>
    //           <input
    //             type="email"
    //             className="form-control"
    //             placeholder="Email Giriniz"
    //             name="email"
    //             onChange={(e) => handleChangeInput(e)}
    //             required
    //           />
    //         </div>
    //         <div className="form-group">
    //           <label htmlFor="">Şifre</label>
    //           <input
    //             type="password"
    //             className="form-control"
    //             placeholder="Şifrenizi Giriniz"
    //             name="password"
    //             onChange={(e) => handleChangeInput(e)}
    //           />
    //         </div>
    //         <div className="form-group">
    //           <button className="btn btn-success">Giriş</button>
    //         </div>
    //         <div className="form-group">
    //           Henüz Üye Değilmisiniz?
    //           <Link to="/register">Üye olmak için TIKLAYIN.</Link>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div className="landing">
      {/* LANDING DECORATION */}
      <div className="landing-decoration" />
      {/* /LANDING DECORATION */}
      {/* LANDING INFO */}
      <div className="landing-info">
        {/* LOGO */}
        <div className="logo">
          {/* ICON LOGO VIKINGER */}
          <svg className="icon-logo-vikinger">
            <use xlinkHref="#svg-logo-vikinger" />
          </svg>
          {/* /ICON LOGO VIKINGER */}
        </div>
        {/* /LOGO */}
        {/* LANDING INFO PRETITLE */}
        <h2 className="landing-info-pretitle">Hoş Geldiniz</h2>
        {/* /LANDING INFO PRETITLE */}
        {/* LANDING INFO TITLE */}
        <h2 className="landing-info-title">Kelime Savaşı</h2>
        {/* /LANDING INFO TITLE */}
        {/* LANDING INFO TEXT */}
        <p className="landing-info-text"></p>
        {/* /LANDING INFO TEXT */}
        {/* TAB SWITCH */}
        <div className="tab-switch">
          {/* TAB SWITCH BUTTON */}
          <button
            className="tab-switch-button login-register-form-trigger active"
            onClick={() => setLogin("hidden")}
          >
            Giriş Yap
          </button>
          {/* /TAB SWITCH BUTTON */}
          {/* TAB SWITCH BUTTON */}
          <button
            className="tab-switch-button login-register-form-trigger active"
            onClick={() => setLogin("visible")}
          >
            Üye Ol
          </button>
          {/* /TAB SWITCH BUTTON */}
        </div>
        {/* /TAB SWITCH */}
      </div>
      {/* /LANDING INFO */}
      {/* LANDING FORM */}
      <div className="landing-form">
        {/* FORM BOX */}
        <div className="form-box login-register-form-element">
          {/* FORM BOX DECORATION */}
          <img
            className="form-box-decoration overflowing"
            src="img/landing/rocket.png"
            alt="rocket"
          />
          {/* /FORM BOX DECORATION */}
          {/* FORM BOX TITLE */}
          <h2 className="form-box-title">Giriş Yap</h2>
          {/* /FORM BOX TITLE */}
          {/* FORM */}
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            {/* FORM ROW */}
            <div className="form-row">
              {/* FORM ITEM */}
              <div className="form-item">
                {/* FORM INPUT */}
                <div className="form-input">
                  <label htmlFor="login-username"></label>
                  <input
                    type="text"
                    id="login-username"
                    name="email"
                    className="form-control"
                    onChange={(e) => handleChangeInput(e)}
                    required
                    placeholder="Email Adresi"
                  />
                </div>
                {/* /FORM INPUT */}
              </div>
              {/* /FORM ITEM */}
            </div>
            {/* /FORM ROW */}
            {/* FORM ROW */}
            <div className="form-row">
              {/* FORM ITEM */}
              <div className="form-item">
                {/* FORM INPUT */}
                <div className="form-input">
                  <label htmlFor="login-password"></label>
                  <input
                    type="password"
                    id="login-password"
                    name="password"
                    className="form-control"
                    onChange={(e) => handleChangeInput(e)}
                    placeholder="Şifre"
                  />
                </div>
                {/* /FORM INPUT */}
              </div>
              {/* /FORM ITEM */}
            </div>
            {/* /FORM ROW */}
            {/* FORM ROW */}
            <div className="form-row space-between">
              {/* FORM ITEM */}
              <div className="form-item">
                {/* CHECKBOX WRAP */}
                <div className="checkbox-wrap">
                  <input
                    type="checkbox"
                    id="login-remember"
                    name="login_remember"
                    defaultChecked
                  />
                  {/* CHECKBOX BOX */}
                  <div className="checkbox-box">
                    {/* ICON CROSS */}
                    <svg className="icon-cross">
                      <use xlinkHref="#svg-cross" />
                    </svg>
                    {/* /ICON CROSS */}
                  </div>
                  {/* /CHECKBOX BOX */}
                  <label htmlFor="login-remember">Beni Hatırla</label>
                </div>
                {/* /CHECKBOX WRAP */}
              </div>
              {/* /FORM ITEM */}
              {/* FORM ITEM */}
              <div className="form-item">
                {/* FORM LINK */}
                <a className="form-link" href="#">
                  Şifre mi unuttum
                </a>
                {/* /FORM LINK */}
              </div>
              {/* /FORM ITEM */}
            </div>
            {/* /FORM ROW */}
            {/* FORM ROW */}
            <div className="form-row">
              {/* FORM ITEM */}
              <div className="form-item">
                {/* BUTTON */}

                <button className="button medium secondary">Giriş Yap</button>
                {/* /BUTTON */}
              </div>
              {/* /FORM ITEM */}
            </div>
            {/* /FORM ROW */}
          </form>
          {/* /FORM */}
          {/* LINED TEXT */}
          <p className="lined-text">Login with your Social Account</p>
          {/* /LINED TEXT */}
          {/* SOCIAL LINKS */}
          <div className="social-links">
            {/* SOCIAL LINK */}
            <a className="social-link facebook" href="#">
              {/* ICON FACEBOOK */}
              <svg className="icon-facebook">
                <use xlinkHref="#svg-facebook" />
              </svg>
              {/* /ICON FACEBOOK */}
            </a>
            {/* /SOCIAL LINK */}
            {/* SOCIAL LINK */}
            <a className="social-link twitter" href="#">
              {/* ICON TWITTER */}
              <svg className="icon-twitter">
                <use xlinkHref="#svg-twitter" />
              </svg>
              {/* /ICON TWITTER */}
            </a>
            {/* /SOCIAL LINK */}
            {/* SOCIAL LINK */}
            <a className="social-link twitch" href="#">
              {/* ICON TWITCH */}
              <svg className="icon-twitch">
                <use xlinkHref="#svg-twitch" />
              </svg>
              {/* /ICON TWITCH */}
            </a>
            {/* /SOCIAL LINK */}
            {/* SOCIAL LINK */}
            <a className="social-link youtube" href="#">
              {/* ICON YOUTUBE */}
              <svg className="icon-youtube">
                <use xlinkHref="#svg-youtube" />
              </svg>
              {/* /ICON YOUTUBE */}
            </a>
            {/* /SOCIAL LINK */}
          </div>
          {/* /SOCIAL LINKS */}
        </div>
        {/* /FORM BOX */}
        {/* FORM BOX */}
        <div
          className="form-box login-register-form-element"
          style={{ visibility: log }}
        >
          {/* FORM BOX DECORATION */}
          <img
            className="form-box-decoration"
            src="img/landing/rocket.png"
            alt="rocket"
          />
          {/* /FORM BOX DECORATION */}
          {/* FORM BOX TITLE */}
          <h2 className="form-box-title">Create your Account!</h2>
          {/* /FORM BOX TITLE */}
          {/* FORM */}
          <form className="form">
            {/* FORM ROW */}
            <div className="form-row">
              {/* FORM ITEM */}
              <div className="form-item">
                {/* FORM INPUT */}
                <div className="form-input">
                  <label htmlFor="register-email">Your Email</label>
                  <input
                    type="text"
                    id="register-email"
                    name="register_email"
                  />
                </div>
                {/* /FORM INPUT */}
              </div>
              {/* /FORM ITEM */}
            </div>
            {/* /FORM ROW */}
            {/* FORM ROW */}
            <div className="form-row">
              {/* FORM ITEM */}
              <div className="form-item">
                {/* FORM INPUT */}
                <div className="form-input">
                  <label htmlFor="register-username">Username</label>
                  <input
                    type="text"
                    id="register-username"
                    name="register_username"
                  />
                </div>
                {/* /FORM INPUT */}
              </div>
              {/* /FORM ITEM */}
            </div>
            {/* /FORM ROW */}
            {/* FORM ROW */}
            <div className="form-row">
              {/* FORM ITEM */}
              <div className="form-item">
                {/* FORM INPUT */}
                <div className="form-input">
                  <label htmlFor="register-password">Password</label>
                  <input
                    type="password"
                    id="register-password"
                    name="register_password"
                  />
                </div>
                {/* /FORM INPUT */}
              </div>
              {/* /FORM ITEM */}
            </div>
            {/* /FORM ROW */}
            {/* FORM ROW */}
            <div className="form-row">
              {/* FORM ITEM */}
              <div className="form-item">
                {/* FORM INPUT */}
                <div className="form-input">
                  <label htmlFor="register-password-repeat">
                    Repeat Password
                  </label>
                  <input
                    type="password"
                    id="register-password-repeat"
                    name="register_password_repeat"
                  />
                </div>
                {/* /FORM INPUT */}
              </div>
              {/* /FORM ITEM */}
            </div>
            {/* /FORM ROW */}
            {/* FORM ROW */}
            <div className="form-row">
              {/* FORM ITEM */}
              <div className="form-item">
                {/* CHECKBOX WRAP */}
                <div className="checkbox-wrap">
                  <input
                    type="checkbox"
                    id="register-newsletter"
                    name="register_newsletter"
                    defaultChecked
                  />
                  {/* CHECKBOX BOX */}
                  <div className="checkbox-box">
                    {/* ICON CROSS */}
                    <svg className="icon-cross">
                      <use xlinkHref="#svg-cross" />
                    </svg>
                    {/* /ICON CROSS */}
                  </div>
                  {/* /CHECKBOX BOX */}
                  <label htmlFor="register-newsletter">
                    Send me news and updates via email
                  </label>
                </div>
                {/* /CHECKBOX WRAP */}
              </div>
              {/* /FORM ITEM */}
            </div>
            {/* /FORM ROW */}
            {/* FORM ROW */}
            <div className="form-row">
              {/* FORM ITEM */}
              <div className="form-item">
                {/* BUTTON */}
                <button className="button medium primary">Register Now!</button>
                {/* /BUTTON */}
              </div>
              {/* /FORM ITEM */}
            </div>
            {/* /FORM ROW */}
          </form>
          {/* /FORM */}
          {/* FORM TEXT */}
          <p className="form-text">
            You'll receive a confirmation email in your inbox with a link to
            activate your account. If you have any problems,{" "}
            <a href="#">contact us</a>!
          </p>
          {/* /FORM TEXT */}
        </div>
        {/* /FORM BOX */}
      </div>
      {/* /LANDING FORM */}
      <script src="app.bundle.min.js"></script>
    </div>
  );
};

export default Login;
