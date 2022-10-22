import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AppName from "../Components/AppName";
import LoginInput from "../Components/LoginInput";
const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();

  const onSubmitHandler = (event, user) => {
    event.preventDefault();
    onLogin(user);
    navigate("/");
  };

  return (
    <div className="auth-page">
      <h1 className="auth-page__title">
        Selamat datang kembali di <AppName />
      </h1>
      <LoginInput onSubmit={onSubmitHandler} />
      <p className="auth-page__text">
        Belum punya akun?{" "}
        <Link className="auth-page__link" to="/register">
          Daftar
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
