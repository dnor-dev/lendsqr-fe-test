import { v4 } from 'uuid';

const links = [
  {
    id: v4(),
    header: 'customers',
    links: [
      {
        id: v4(),
        path: '/',
        name: 'Users',
        img: '/images/user-friends 1.svg',
      },
      {
        id: v4(),
        path: '/g',
        name: 'Guarantors',
        img: '/images/users 1.svg',
      },
      {
        id: v4(),
        path: '/ll',
        name: 'Loans',
        img: '/images/sack 1.svg',
      },
      {
        id: v4(),
        path: '/tr',
        name: 'Decision Models',
        img: '/images/handshake-regular 1.svg',
      },
      {
        id: v4(),
        path: '/tr',
        name: 'Savings',
        img: '/images/piggy-bank 1.svg',
      },
      {
        id: v4(),
        path: '/d',
        name: 'Loan Requests',
        img: '/images/Group 104.svg',
      },
      {
        id: v4(),
        path: '/d',
        name: 'Whitelist',
        img: '/images/user-check 1.svg',
      },
      {
        id: v4(),
        path: '/d',
        name: 'Karma',
        img: '/images/user-times 1.svg',
      },
    ],
  },
  {
    id: v4(),
    header: 'businesses',
    links: [
      {
        id: v4(),
        path: '/k',
        name: 'Organization',
        img: '/images/briefcase 1.svg',
      },
      {
        id: v4(),
        path: '/tr',
        name: 'Loan Products',
        img: '/images/Group 104.svg',
      },
      {
        id: v4(),
        path: '/tr',
        name: 'Saving Products',
        img: '/images/np_bank_148501_000000 1.svg',
      },
      {
        id: v4(),
        path: '/iss',
        name: 'Fees and Charges',
        img: '/images/coins-solid 1.svg',
      },
      {
        id: v4(),
        path: '/s',
        name: 'Transactions',
        img: '/images/icon.svg',
      },
      {
        id: v4(),
        path: '/tr',
        name: 'Services',
        img: '/images/galaxy 1.svg',
      },
      {
        id: v4(),
        path: '/tr',
        name: 'Service account',
        img: '/images/user-cog 1.svg',
      },
      {
        id: v4(),
        path: '/tr',
        name: 'Settlements',
        img: '/images/scroll 1.svg',
      },
      {
        id: v4(),
        path: '/tr',
        name: 'Reports',
        img: '/images/chart-bar 2.svg',
      },
    ],
  },
  {
    id: v4(),
    header: 'settings',
    links: [
      {
        id: v4(),
        path: '/tr',
        name: 'Preferences',
        img: '/images/sliders-h 1.svg',
      },
      {
        id: v4(),
        path: '/tr',
        name: 'Fees and Pricing',
        img: '/images/badge-percent 1.svg',
      },
      {
        id: v4(),
        path: '/tr',
        name: 'Audit Logs',
        img: '/images/clipboard-list 1.svg',
      },
    ],
  },
];

export default links;
