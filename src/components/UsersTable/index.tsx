import { useState, useEffect, useRef } from 'react';
import './userstable.scss';
import { BiFilter } from 'react-icons/bi';
import { HiDotsVertical } from 'react-icons/hi';
import { MdOutlineVisibility } from 'react-icons/md';
import { TbUserX } from 'react-icons/tb';
import { RiUserFollowLine } from 'react-icons/ri';
import StatusBadge from '../StatusBadge';
import TableForm from '../TableForm';
import Loader from '../Loader';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDetails } from '../../types';
import moment from 'moment';
import Pagination from '../Pagination';
import _ from 'lodash';

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
  const [userDetails, setUserDetails] = useState<UserDetails[][]>([]);
  const [loading, setLoading] = useState(false);
  const optionsRef = useRef<any>(null);
  const tableFormRef = useRef<any>(null);

  const [totalPageData, setTotalPageData] = useState(0);
  const [page, setPage] = useState(0);

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

  async function getUserDetails() {
    setLoading(true);
    try {
      const res = await axios.get(
        'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users',
      );
      setTotalPageData(res.data?.length);
      setUserDetails(_.chunk(res.data, 10));
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getUserDetails();
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="users-table">
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
            {userDetails[page]?.length !== 0 ? (
              userDetails[page]?.map((detail: UserDetails) => (
                <tr key={detail.id}>
                  <td>{detail.orgName}</td>
                  <td>{detail.userName}</td>
                  <td className="lowercase">{detail.email}</td>
                  <td>{detail.phoneNumber}</td>
                  <td>
                    {moment(detail.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                  </td>
                  <td>
                    <StatusBadge status="inactive" />
                  </td>
                  <td
                    align="center"
                    onClick={() => {
                      setOptions(detail.id);
                    }}
                  >
                    <HiDotsVertical />
                    {options === detail.id && (
                      <div className="options" ref={optionsRef}>
                        <div
                          className="options-flex"
                          onClick={() => navigate(`/users/${detail.id}`)}
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
              ))
            ) : (
              <div>There are no users yet</div>
            )}
          </tbody>
        </table>
      </div>
      {userDetails[page]?.length !== 0 && (
        <Pagination
          total={Math.ceil(userDetails.length)}
          totalData={totalPageData}
          page={page}
          setPage={setPage}
        />
      )}
    </>
  );
};

export default UsersTable;
