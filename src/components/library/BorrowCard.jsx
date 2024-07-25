import ShowModalReview from './ShowModalReview';
import { Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { useState } from 'react';
import ShowModal from './ShowModal';
import { useReturnBookMutation } from '../../api/library/api.library';
import { notifyError, notifySuccess } from '../../utils/Toast';
import { useDispatch } from 'react-redux';
import { removeScannerIsbn } from '../../store/ScannerReducer';

const BorrowCard = (emp) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [returnBook] = useReturnBookMutation();
  const dispatch = useDispatch();
  const toggalModal = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
    dispatch(removeScannerIsbn());
  };

  const toggalModalReview = () => {
    setShowReview(!showReview);
  };
  const resetContent = () => {
    navigate('/library/borrow');
  };

  const handleBorrow = async (temp, shelf_id) => {
    console.log(temp, shelf_id);
    dispatch(removeScannerIsbn());
    try {
      console.log(emp.book.bookDetail.isbn);
      const ReturnResponse = await returnBook({ isbn: parseInt(emp.book.bookDetail.isbn), shelf_id });
      console.log(ReturnResponse);
      if (ReturnResponse.error) {
        console.log(ReturnResponse.error);
        let notification = ReturnResponse.error.data.message;
        notifyError(notification);
      } else if (ReturnResponse.data) {
        notifySuccess('Book returned successfully idk');
        navigate('/library');
        resetContent();
      }
    } catch (error) {
      console.error(error);
      notifyError('Failed to return book');
    }
    setShowModal(!showModal);
    dispatch(removeScannerIsbn());
  };
  return (
    <>
      <Link to={`/library/details/${emp.book.bookDetail.isbn}`} style={{ textDecoration: 'none', color: 'black' }}>
        <div className="employee-list-items list-book">
          <div className="item">{emp.book.bookDetail.isbn}</div>
          <div className="item">{emp.book.bookDetail.title}</div>
          <div className="item">{format(new Date(emp.borrowed_at), 'dd-MM-yyyy')}</div>

          <div className="item">{format(new Date(emp.expected_return_date), 'dd-MM-yyyy')}</div>

          <div className="item" style={{textAlign:"center"}}>
            {emp.return_date != null ? (
              <p>Returned</p>
            ) : (
              <button className="btn" onClick={toggalModal}>
                Return Now
              </button>
            )}
          </div>
          <div className="item">
            <button
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                toggalModalReview();
              }}
            >
              FeedBack
            </button>
          </div>
        </div>
      </Link>
      {showModal && <ShowModal type={'returnisbn'} onclose={toggalModal} isbn={emp.book.bookDetail.isbn} handleClick={handleBorrow} />}
      {showReview && <ShowModalReview onclose={toggalModalReview} isbn={emp.book.bookDetail.isbn} />}
    </>
  );
};

export default BorrowCard;
