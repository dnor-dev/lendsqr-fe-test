import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useLocation } from 'react-router-dom';
import links from './links';
import './sidebar.scss';

export type ItemLink = {
  id: string;
  path: string;
  name: string;
  img: string;
};

export type Link = {
  id: string;
  header: string;
  links: ItemLink[];
};

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="sidebar-component">
      <div className="org-switch">
        <img src="/images/briefcase 1.svg" alt="briefcase" />
        <p>Switch Organization</p>
        <IoIosArrowDown />
      </div>

      <div className="sidebar-item">
        <img src="/images/home 1.svg" alt="home" />
        <p>Dashboard</p>
      </div>

      <div className="sidebar-list">
        {links.map((link: Link) => (
          <div className="list-item" key={link.id}>
            <p>{link.header}</p>
            <div className="sidebar-links">
              {link.links.map((item: ItemLink) => (
                <div
                  className={`sidebar-link ${
                    pathname === item.path && 'active-link'
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
          <div className="logout-link">
            <img src="/images/sign-out 1.svg" alt="logout" />
            <p>Logout</p>
          </div>
          <p>v1.2.0</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
