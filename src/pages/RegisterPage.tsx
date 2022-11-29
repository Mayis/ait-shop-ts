import React, { useEffect } from "react";
import {
  RegisterType,
  registerUser,
  userSelector,
} from "../redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector(userSelector);

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData: RegisterType = {};
    for (const info of formData.entries()) {
      const [key, value] = info;
      userData[key] = value;
    }
    dispatch(registerUser(userData));
    e.currentTarget.reset();
  };
  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);
  return (
    <div id="fullRegister">
      <form onSubmit={handleRegister}>
        <input type="text" name="fullname" placeholder="write yourfullName" />
        <input type="text" name="email" placeholder="write your email" />
        <input
          type="password"
          name="password"
          placeholder="write your password"
        />
        <button className="registerButton">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
