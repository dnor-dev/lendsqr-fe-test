import './tableform.scss';
import { RiArrowDownSLine } from 'react-icons/ri';
import { BiCalendar } from 'react-icons/bi';

const TableForm = ({ tableFormRef }: any) => {
  return (
    <div className="table-form" ref={tableFormRef}>
      <div className="org">
        <p className="label">Organization</p>
        <div>
          <p>Select</p>
          <RiArrowDownSLine />
        </div>
      </div>

      <div className="input">
        <p className="label">Username</p>
        <input type="text" placeholder="User" />
      </div>

      <div className="input">
        <p className="label">Email</p>
        <input type="text" placeholder="Email" />
      </div>

      <div className="org">
        <p className="label">Date</p>
        <div>
          <p>Date</p>
          <BiCalendar />
        </div>
      </div>

      <div className="input">
        <p className="label">Phone Number</p>
        <input type="text" placeholder="Phone Number" />
      </div>

      <div className="org">
        <p className="label">Status</p>
        <div>
          <p>Select</p>
          <RiArrowDownSLine />
        </div>
      </div>

      <div className="flex-btn">
        <button className="reset">Reset</button>
        <button className="filter">Filter</button>
      </div>
    </div>
  );
};

export default TableForm;
