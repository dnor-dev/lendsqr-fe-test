import React from 'react';
import LoginForm from '../../components/LoginForm';
import './login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="logo-section">
        <img src="/images/Group.svg" alt="Lendsqr" />
        <img src="/images/pablo-sign-in 1.png" alt="signin" />
      </div>

      <div className="welcome-section">
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
