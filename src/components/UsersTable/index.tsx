import { useState, useEffect, useRef } from 'react';
import './userstable.scss';
import { BiFilter } from 'react-icons/bi';
import { HiDotsVertical } from 'react-icons/hi';
import { MdOutlineVisibility } from 'react-icons/md';
import { TbUserX } from 'react-icons/tb';
import { RiUserFollowLine } from 'react-icons/ri';
import StatusBadge from '../StatusBadge';
import TableForm from '../TableForm';
import { useNavigate } from 'react-router-dom';

const UsersTable = () => {
  const tableHeads = [
    'organization',
    'username',
    'email',
    'phone number',
    'date joined',
    'status',
    '',
  ];
  const navigate = useNavigate();

  const [options, setOptions] = useState<any>(null);
  const [openForm, setOpenForm] = useState(false);
  const optionsRef = useRef<any>(null);
  const tableFormRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        (optionsRef.current && !optionsRef?.current?.contains(event.target)) ||
        (tableFormRef.current && !tableFormRef?.current?.contains(event.target))
      ) {
        setOptions(null);
        setOpenForm(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [optionsRef, tableFormRef]);

  return (
    <table className="table">
      <thead onClick={() => setOpenForm(true)}>
        <tr>
          {tableHeads.map((head: string, i) => (
            <th key={i}>
              <div>
                <p>{head}</p>
                {head !== '' && <BiFilter />}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      {openForm && <TableForm tableFormRef={tableFormRef} />}
      <tbody>
        <tr>
          <td>Lendsqr</td>
          <td>Adedeji</td>
          <td>adedeji@lendsqr.com</td>
          <td>08078903721</td>
          <td>May 15, 2020 10:00AM</td>
          <td>
            <StatusBadge status="inactive" />
          </td>
          <td
            align="center"
            onClick={() => {
              setOptions(2);
            }}
          >
            <HiDotsVertical />
            {options === 2 && (
              <div className="options" ref={optionsRef}>
                <div
                  className="options-flex"
                  onClick={() => navigate('/user/123')}
                >
                  <MdOutlineVisibility />
                  <p>View Details</p>
                </div>
                <div className="options-flex">
                  <TbUserX strokeWidth={2.5} />
                  <p>Blacklist User</p>
                </div>
                <div className="options-flex">
                  <RiUserFollowLine />
                  <p>Activate User</p>
                </div>
              </div>
            )}
          </td>
        </tr>
        <tr>
          <td>Lendsqr</td>
          <td>Adedeji</td>
          <td>adedeji@lendsqr.com</td>
          <td>08078903721</td>
          <td>May 15, 2020 10:00AM</td>
          <td>
            <StatusBadge status="inactive" />
          </td>
          <td align="center" onClick={() => setOptions(3)}>
            <HiDotsVertical />
            {options === 3 && (
              <div className="options" ref={optionsRef}>
                <div className="options-flex">
                  <MdOutlineVisibility />
                  <p>View Details</p>
                </div>
                <div className="options-flex">
                  <TbUserX strokeWidth={2.5} />
                  <p>Blacklist User</p>
                </div>
                <div className="options-flex">
                  <RiUserFollowLine />
                  <p>Activate User</p>
                </div>
              </div>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default UsersTable;
