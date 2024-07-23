import '../assets/styles/Library/library.style.scss';
import { useEffect } from 'react';
import BorrowCard from '../components/library/BorrowCard';
import BorrowCardHead from '../components/library/BorrowCardHead';
import { useGetBorrowHistoryQuery } from '../api/library/api.library';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ShowModal from '../components/library/ShowModal';

const BorrowDetails = () => {
  const { data: borrowedData } = useGetBorrowHistoryQuery();
  useEffect(() => {
    console.log(borrowedData);
  }, [borrowedData]);

  const [showModal, setShowModal] = useState(false);

  const toggalModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="Dashboard">
        <div className="top-header-employee-details">
          <h1>Borrowed Books</h1>
          <div className="top-header-components">
            <div className="scan">
              <button className="btn" title="return now by scanning isbn and enter shelf no." onClick={toggalModal}>
                Scan to return
              </button>
            </div>
          </div>
        </div>
        {showModal && <ShowModal onclose={toggalModal} />}

        <div className="book-list">
          <BorrowCardHead />
          <div className="employee-list">{borrowedData && borrowedData.map((book, index) => <BorrowCard key={index} {...book} />)}</div>
        </div>
      </div>
    </>
  );
};

export default BorrowDetails;
