import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginform.scss';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="login-form">
      <form>
        <input type="text" placeholder="Email" />
        <div className="password">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
          />
          <button
            onClick={(e) => {
              setShowPassword(!showPassword);
              e.preventDefault();
            }}
          >
            {showPassword ? 'HIDE' : 'SHOW'}
          </button>
        </div>

        <a href="#">forgot password?</a>

        <button
          onClick={(e: any) => {
            navigate('users');
          }}
        >
          log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
