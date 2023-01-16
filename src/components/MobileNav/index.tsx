import React, { useState, useEffect, useRef } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsBell } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import links from '../Sidebar/links';
import { Link, ItemLink } from '../Sidebar';
import { useLocation } from 'react-router-dom';
import './mobilenav.scss';

const MobileNav = () => {
  const { pathname } = useLocation();
  const navRef = useRef<any>(null);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (navRef.current && !navRef?.current?.contains(event.target)) {
        setOpenNav(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navRef]);

  return (
    <div className="mobile-nav">
      <GiHamburgerMenu onClick={() => setOpenNav(true)} />
      <div className={`sidebar ${openNav && 'show-nav'}`} ref={navRef}>
        <IoMdClose onClick={() => setOpenNav(false)} />
        <div className="docsandnotification">
          <a href="#">Docs</a>
          <BsBell className="notification-bell" />
        </div>
        <div className="list">
          {links.map((link: Link) => (
            <div className="list-item" key={link.id}>
              <p>{link.header}</p>
              <div className="sidebar-links">
                {link.links.map((item: ItemLink) => (
                  <div
                    className={`sidebar-link ${
                      pathname === item.path && 'active-mobile-link'
                    }`}
                    key={item.id}
                  >
                    <img src={item.img} alt={item.name} />
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="logout">
            <div className="logout-mobile-link">
              <img src="/images/sign-out 1.svg" alt="logout" />
              <p>Logout</p>
            </div>
            <p>v1.2.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
