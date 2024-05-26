import React, { useContext } from "react";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const isLogged = useSelector((state) => state.login.isLogged);
  
  console.log(isLogged)

  const toggleLogin = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <div>
      <h1>Login page</h1>
      <Button onClick={toggleLogin}>{!isLogged ? "Log in " : "Log out"}</Button>
    </div>
  );
};

export default Login;
