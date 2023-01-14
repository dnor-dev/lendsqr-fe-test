import { AiOutlineUser, AiOutlineStar, AiFillStar } from 'react-icons/ai';
import './userdetails.scss';

const UserDetails = () => {
  return (
    <div className="user-details">
      <div className="profile">
        <div className="profile-pics">
          <AiOutlineUser />
        </div>
        <div className="profile-details">
          <div className="deet">
            <p>Grace Effiom</p>
            <p>LSQFf587g90</p>
          </div>
          <hr className="divider" />
          <div className="deet">
            <p>User's Tier</p>
            <div className="flex-stars">
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
          </div>
          <hr className="divider" />
          <div className="deet">
            <p>&#8358;200,000.000</p>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>
      </div>

      <div className="tabs">
        <p>General Details</p>
        <p>Documents</p>
        <p>Bank Details</p>
        <p>Loans</p>
        <p>Savings</p>
        <p>App and System</p>
      </div>
    </div>
  );
};

export default UserDetails;
