import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaCaretDown } from 'react-icons/fa';
import { BsBell } from 'react-icons/bs';
import MobileNav from '../MobileNav';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logoandsearch">
        <img src="/images/Group.svg" alt="lendsqr" />
        <div className="search-component">
          <input type="text" placeholder="Search for anything" />
          <button>
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="profile-sect">
        <a href="#">Docs</a>
        <div className="notandpic">
          <BsBell className="notification-bell" />
          <div className="profile-pics">
            <img src="/images/joystick-user.png" alt="user" />
            <MobileNav />
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
