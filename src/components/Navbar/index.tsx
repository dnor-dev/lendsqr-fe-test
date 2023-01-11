import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { FaCaretDown } from 'react-icons/fa';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo&search">
        <img src="" alt="" />
        <div className="search-component">
          <input type="text" placeholder="Search for anything" />
          <button>
            <HiOutlineSearch />
          </button>
        </div>
      </div>

      <div className="profile-sect">
        <a href="#">Docs</a>
        <div className="not&pic">
          <img src="/images/notification.svg" alt="notifications" />
          <div className="profile-pics">
            <img src="/images/joystick-user.png" alt="user" />
            <span>
              <p>Adedeji</p>
              <FaCaretDown />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
