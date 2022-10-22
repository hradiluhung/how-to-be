import React from "react";
import { Link } from "react-router-dom";
import AppName from "../Components/AppName";
import RegisterInput from "../Components/RegisterInput";

const RegisterPage = () => {
  return (
    <div className="auth-page">
      <h1 className="auth-page__title">
        Daftar di <AppName />
      </h1>
      <RegisterInput />
      <p className="auth-page__text">
        Sudah punya akun?{" "}
        <Link className="auth-page__link" to="/">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
