import React from 'react';
import './userstats.scss';

type Props = {
  name: string;
  value: number;
};

const items = {
  users: {
    name: 'users',
    img: '/images/user-stats4.svg',
  },
  activeUsers: {
    name: 'active users',
    img: '/images/user-stats3.svg',
  },
  usersWithLoans: {
    name: 'users with loans',
    img: '/images/user-stats2.svg',
  },
  usersWithSavings: {
    name: 'users with savings',
    img: '/images/user-stats1.svg',
  },
};

const UserStats = ({ name, value }: Props) => {
  const titleValue =
    name === 'users'
      ? 'users'
      : name === 'activeUsers'
      ? 'activeUsers'
      : name === 'usersWithLoans'
      ? 'usersWithLoans'
      : 'usersWithSavings';
  return (
    <div className="user-stats">
      <img src={items[titleValue].img} alt={items[titleValue].name} />
      <p>{items[titleValue].name}</p>
      <p>{value.toLocaleString()}</p>
    </div>
  );
};

export default UserStats;
