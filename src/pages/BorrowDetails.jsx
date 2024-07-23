import '../assets/styles/Library/library.style.scss';
import { useEffect } from 'react';
import BorrowCard from '../components/library/BorrowCard';
import BorrowCardHead from '../components/library/BorrowCardHead';
import { useGetBorrowHistoryQuery, useReturnBookMutation } from '../api/library/api.library';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ShowModal from '../components/library/ShowModal';
import { notifyError, notifySuccess } from '../utils/Toast';

const BorrowDetails = () => {
  const { data: borrowedData } = useGetBorrowHistoryQuery();
  useEffect(() => {
    console.log(borrowedData);
  }, [borrowedData]);
  const [returnBook] = useReturnBookMutation();

  const [showModal, setShowModal] = useState(false);

  const handleReturn = async (isbn, shelf) => {
    console.log(isbn, shelf);
    try {
      const ReturnResponse = await returnBook({ isbn: parseInt(isbn), shelf_id: shelf });
      console.log(ReturnResponse);
      if (ReturnResponse.error) {
        console.log(ReturnResponse.error);
        let notification = ReturnResponse.error.data.message;
        notifyError(notification);
      } else if (ReturnResponse.data) {
        notifySuccess('Book returned successfully');
      }
    } catch (error) {
      console.error(error);
      notifyError('Failed to return book');
    }
  };

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
        {showModal && <ShowModal type={'return'} onclose={toggalModal} handleClick={handleReturn} />}

        <div className="book-list">
          <BorrowCardHead />
          <div className="employee-list">{borrowedData && borrowedData.map((book, index) => <BorrowCard key={index} {...book} />)}</div>
        </div>
      </div>
    </>
  );
};

export default BorrowDetails;
