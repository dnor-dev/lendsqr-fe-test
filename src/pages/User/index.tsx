import React from 'react';
import { CgArrowLongLeft } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import UserDetails from '../../components/UserDetails';
import PersonalInfo from '../../components/PersonalInfo';
import './user.scss';

const User = () => {
  const navigate = useNavigate();
  return (
    <div className="user">
      <div className="back" onClick={() => navigate('/')}>
        <CgArrowLongLeft />
        <p>Back to Users</p>
      </div>

      <div className="details">
        <h5>User Details</h5>
        <div className="flex-btn">
          <button className="blacklist">blacklist user</button>
          <button className="activate">Activate user</button>
        </div>
      </div>

      <UserDetails />
      <PersonalInfo />
    </div>
  );
};

export default User;
