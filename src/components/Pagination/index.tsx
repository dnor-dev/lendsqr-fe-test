import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowDown,
} from 'react-icons/md';
import './pagination.scss';

type Props = {
  total: number;
  totalData: number;
  page: number;
  setPage: (page: number) => void;
};

const Pagination = ({ total, totalData, page, setPage }: Props) => {
  const itemsPerPage = Math.ceil(totalData / total);

  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % total;
    setPage(Number(event.selected));
    setItemOffset(newOffset);
  };

  return (
    <div className="table-pagination">
      <div className="paginate-details">
        <p>Showing</p>
        <span>
          <p>{page + 1}</p>
          <MdKeyboardArrowDown />
        </span>
        <p>out of {total}</p>
      </div>
      <ReactPaginate
        nextLabel={
          <button disabled={page === total - 1}>
            <MdKeyboardArrowRight />
          </button>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={total}
        previousLabel={
          <button disabled={page === 0}>
            <MdKeyboardArrowLeft />
          </button>
        }
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default Pagination;
