import '../style/style.css';
import { LoginType, getUser, userSelector } from '../redux/slices/userSlice';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector(userSelector);
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData: LoginType = {};
    for (const info of formData.entries()) {
      const [key, value] = info;
      userData[key] = value;
    }
    dispatch(getUser(userData));
    e.currentTarget.reset();
  };
  useEffect(() => {
    if (user) navigate('/products/home');
  }, [user, navigate]);
  const goRegisterPage = () => {
    navigate('/auth/register');
  };
  return (
    <div id="fullLogin">
      <div id="loginPart">
        <form onSubmit={handleLogin} className="loginForm">
          <input type="text" name="email" placeholder="write your email" />
          <input type="password" name="password" placeholder="write your password" />
          <button className="signInButton">Sign in</button>
          <p className="toRegister" onClick={goRegisterPage}>
            do you want to register?
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
