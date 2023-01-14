import React from 'react';
import './personalinfo.scss';

type Props = {
  title: string;
  value: string;
};

const PersonalInfo = () => {
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
          <PersonalDetails title="full name" value="grace effiom" />
          <PersonalDetails title="phone number" value="09037027773" />
          <PersonalDetails title="email address" value="grace@gmail.com" />
          <PersonalDetails title="bvn" value="20172036863" />
          <PersonalDetails title="gender" value="female" />
          <PersonalDetails title="marital status" value="single" />
          <PersonalDetails title="children" value="none" />
          <PersonalDetails
            title="type of residence"
            value="parent's apartment"
          />
        </div>
      </div>
      <div className="header-information">
        <h5>Education and Employment</h5>
        <div className="grid-4">
          <PersonalDetails title="level of education" value="B.Sc" />
          <PersonalDetails title="Employment Status" value="employed" />
          <PersonalDetails title="sector of employment" value="FinTech" />
          <PersonalDetails title="duration of employment" value="2 years" />
          <PersonalDetails title="office email" value="grace@lendsqr.com" />
          <PersonalDetails
            title="monthly income"
            value="&#8358;200,000.00 - &#8358;400,000.00"
          />
          <PersonalDetails title="loan repayment" value="40,000" />
        </div>
      </div>
      <div className="header-information">
        <h5>Socials</h5>
        <div className="grid-5">
          <PersonalDetails title="twitter" value="@grace_effiom" />
          <PersonalDetails title="facebook" value="grace effiom" />
          <PersonalDetails title="instagram" value="@grace_effiom" />
        </div>
      </div>
      <div className="header-information">
        <h5>Guarantor</h5>
        <div className="grid-5">
          <PersonalDetails title="full name" value="Debby Ogana" />
          <PersonalDetails title="phone number" value="08163214462" />
          <PersonalDetails title="email address" value="debby@gmail.com" />
          <PersonalDetails title="relationship" value="sister" />
        </div>
      </div>

      <div className="header-information">
        <h5></h5>
        <div className="grid-5 no-border">
          <PersonalDetails title="full name" value="Debby Ogana" />
          <PersonalDetails title="phone number" value="08163214462" />
          <PersonalDetails title="email address" value="debby@gmail.com" />
          <PersonalDetails title="relationship" value="sister" />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
