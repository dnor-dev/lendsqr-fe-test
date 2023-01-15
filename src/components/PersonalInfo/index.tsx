import React from 'react';
import './personalinfo.scss';
import { UserDetails } from '../../types';

type Props = {
  title: string;
  value: string;
};

type userDetailsProps = {
  userDetail: UserDetails;
};
const PersonalInfo = ({ userDetail }: userDetailsProps) => {
  const PersonalDetails = ({ title, value }: Props) => {
    return (
      <div className="personal-details">
        <p>{title}</p>
        <p className={value.includes('@') ? 'email' : ''}>{value}</p>
      </div>
    );
  };
  return (
    <div className="personal-info">
      <div className="header-information">
        <h5>Personal Information</h5>
        <div className="grid-5">
          <PersonalDetails
            title="full name"
            value={`${userDetail.profile.firstName} ${userDetail.profile.lastName}`}
          />
          <PersonalDetails
            title="phone number"
            value={userDetail.phoneNumber}
          />
          <PersonalDetails title="email address" value={userDetail.email} />
          <PersonalDetails title="bvn" value={userDetail.profile.bvn} />
          <PersonalDetails title="gender" value={userDetail.profile.gender} />
          <PersonalDetails title="marital status" value="single" />
          <PersonalDetails title="children" value="none" />
          <PersonalDetails
            title="type of residence"
            value={userDetail.profile.address}
          />
        </div>
      </div>
      <div className="header-information">
        <h5>Education and Employment</h5>
        <div className="grid-4">
          <PersonalDetails
            title="level of education"
            value={userDetail.education.level}
          />
          <PersonalDetails
            title="Employment Status"
            value={userDetail.education.employmentStatus}
          />
          <PersonalDetails
            title="sector of employment"
            value={userDetail.education.sector}
          />
          <PersonalDetails
            title="duration of employment"
            value={userDetail.education.duration}
          />
          <PersonalDetails
            title="office email"
            value={userDetail.education.officeEmail}
          />
          <PersonalDetails
            title="monthly income"
            value={`${String.fromCodePoint(8358)}${
              userDetail.education.monthlyIncome[1]
            } - ${String.fromCodePoint(8358)}${
              userDetail.education.monthlyIncome[0]
            }`}
          />
          <PersonalDetails
            title="loan repayment"
            value={userDetail.education.loanRepayment}
          />
        </div>
      </div>
      <div className="header-information">
        <h5>Socials</h5>
        <div className="grid-5">
          <PersonalDetails title="twitter" value={userDetail.socials.twitter} />
          <PersonalDetails
            title="facebook"
            value={userDetail.socials.facebook}
          />
          <PersonalDetails
            title="instagram"
            value={userDetail.socials.instagram}
          />
        </div>
      </div>
      <div className="header-information">
        <h5>Guarantor</h5>
        <div className="grid-5">
          <PersonalDetails
            title="full name"
            value={`${userDetail.guarantor.firstName} ${userDetail.guarantor.lastName}`}
          />
          <PersonalDetails
            title="phone number"
            value={userDetail.guarantor.phoneNumber}
          />
          <PersonalDetails
            title="email address"
            value={`${userDetail.profile.firstName}@gmail.com`}
          />
          <PersonalDetails title="relationship" value="sister" />
        </div>
      </div>

      <div className="header-information">
        <h5></h5>
        <div className="grid-5 no-border">
          <PersonalDetails
            title="full name"
            value={`${userDetail.guarantor.firstName} ${userDetail.guarantor.lastName}`}
          />
          <PersonalDetails
            title="phone number"
            value={userDetail.guarantor.phoneNumber}
          />
          <PersonalDetails
            title="email address"
            value={`${userDetail.profile.firstName}@gmail.com`}
          />
          <PersonalDetails title="relationship" value="sister" />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
