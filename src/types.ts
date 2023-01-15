type Profile = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: string;
  bvn: string;
  address: string;
  currency: string;
};

type Guarantor = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
};

type Education = {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: number[];
  loanRepayment: string;
};

export type UserDetails = {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: Profile;
  guarantor: Guarantor;
  accountBalance: string;
  accountNumber: string;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  education: Education;
  id: string;
};
