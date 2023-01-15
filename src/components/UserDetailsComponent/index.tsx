import { AiOutlineUser, AiOutlineStar, AiFillStar } from 'react-icons/ai';
import './userdetails.scss';
import { UserDetails } from '../../types';

type Props = {
  userDetail: UserDetails;
};

const UserDetailsComponent = ({ userDetail }: Props) => {
  return (
    <div className="user-details">
      <div className="profile">
        {userDetail.profile.avatar === null ||
        userDetail.profile.avatar === '' ? (
          <div className="profile-pics">
            <AiOutlineUser />
          </div>
        ) : (
          <img src={userDetail.profile.avatar} alt={userDetail.userName} />
        )}

        <div className="profile-details">
          <div className="deet">
            <p>{`${userDetail.profile.firstName} ${userDetail.profile.lastName}`}</p>
            <p>{userDetail.email}</p>
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
            <p>&#8358;{userDetail.accountBalance.toLocaleLowerCase()}</p>
            <p>{userDetail.accountNumber}/Providus Bank</p>
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

export default UserDetailsComponent;
