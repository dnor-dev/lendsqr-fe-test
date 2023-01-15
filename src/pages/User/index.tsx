import React, { useEffect, useState } from 'react';
import { CgArrowLongLeft } from 'react-icons/cg';
import { useNavigate, useParams } from 'react-router-dom';
import UserDetailsComponent from '../../components/UserDetailsComponent';
import PersonalInfo from '../../components/PersonalInfo';
import './user.scss';
import axios from 'axios';
import { UserDetails } from '../../types';
import Loader from '../../components/Loader';

const User = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState<UserDetails | any>(null);
  const [loading, setLoading] = useState(false);

  async function getUserDetail() {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`,
      );
      setUserDetail(res.data);
      localStorage.setItem('user-details', JSON.stringify(res.data));
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
    }
  }

  function getUserDetailFromLocalStorage() {
    setLoading(true);
    try {
      const res = localStorage.getItem('user-details') ?? '';
      if (res === '') {
        getUserDetail();
      } else {
        setUserDetail(JSON.parse(res));
        setLoading(false);
      }
    } catch (error: any) {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUserDetailFromLocalStorage();
    // eslint-disable-next-line
  }, [id]);

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

      {loading ? (
        <Loader />
      ) : (
        userDetail !== null && (
          <>
            <UserDetailsComponent userDetail={userDetail} />
            <PersonalInfo userDetail={userDetail} />
          </>
        )
      )}
    </div>
  );
};

export default User;
