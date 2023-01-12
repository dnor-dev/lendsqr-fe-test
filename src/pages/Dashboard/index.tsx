import React from 'react';
import UserStats from '../../components/UserStats';
import UsersTable from '../../components/UsersTable';
import './dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Users</h1>

      <div className="user-stats-flex">
        <UserStats name="users" value={2453} />
        <UserStats name="activeUsers" value={2453} />
        <UserStats name="usersWithLoans" value={12453} />
        <UserStats name="usersWithSavings" value={102453} />
      </div>

      <div className="users-table">
        <UsersTable />
      </div>
    </div>
  );
};

export default Dashboard;
