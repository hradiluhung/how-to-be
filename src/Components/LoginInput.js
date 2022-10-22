import React, { useState } from "react";
import TextInput from "./TextInput";

const LoginInput = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    onSubmit(event, { email, password });
  };

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <TextInput
        type="email"
        label="Email"
        value={email}
        onChange={onEmailChangeHandler}
      />
      <TextInput
        type="password"
        label="Password"
        value={password}
        onChange={onPasswordChangeHandler}
      />
      <button className="form-submit">Login</button>
    </form>
  );
};

export default LoginInput;
