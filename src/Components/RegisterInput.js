import React from "react";
import TextInput from "./TextInput";

const RegisterInput = () => {
  return (
    <form className="form">
      <TextInput label="Username" />
      <TextInput label="Nama" />
      <TextInput type="email" label="Email" />
      <TextInput type="password" label="Password" />
      <TextInput type="password" label="Konfirmasi Password" />
      <button className="form-submit">Daftar</button>
    </form>
  );
};

export default RegisterInput;
