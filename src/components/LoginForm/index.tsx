import { useState } from 'react';
import './loginform.scss';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

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

        <button type="submit">log in</button>
      </form>
    </div>
  );
};

export default LoginForm;
