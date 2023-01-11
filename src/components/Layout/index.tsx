import React, { ReactNode } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import './layout.scss';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="children">{children}</div>
      </main>
    </>
  );
};

export default Layout;
