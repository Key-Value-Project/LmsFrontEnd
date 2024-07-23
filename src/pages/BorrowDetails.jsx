import '../assets/styles/Library/library.style.scss';
import { useEffect } from 'react';
import BorrowCard from '../components/library/BorrowCard';
import BorrowCardHead from '../components/library/BorrowCardHead';
import { useGetBorrowHistoryQuery } from '../api/library/api.library';
import { Link } from 'react-router-dom';

const BorrowDetails = () => {
  const { data: borrowedData } = useGetBorrowHistoryQuery();
  useEffect(() => {
    console.log(borrowedData);
  }, [borrowedData]);

  return (
    <>
      <div className="Dashboard">
        <div className="top-header-employee-details">
          <h1>Borrowed Books</h1>
          <div className="top-header-components">
            <div className="scan">
              <Link to="/library/scan">
                <button className="btn" title="return now by scanning isbn and enter shelf no.">
                  Scan to return
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="book-list">
          <BorrowCardHead />
          <div className="employee-list">{borrowedData && borrowedData.map((book, index) => <BorrowCard key={index} {...book} />)}</div>
        </div>
      </div>
    </>
  );
};

export default BorrowDetails;
