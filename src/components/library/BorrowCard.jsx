import ShowModal from './ShowModal';
import ShowModalReview from './ShowModalReview';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { useState } from 'react';

const BorrowCard = (emp) => {
  const [showModal, setShowModal] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const toggalModal = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  const toggalModalReview = (e) => {
    e.preventDefault();
    setShowReview(!showReview);
  };
  return (
    <>
      <Link to={`/library/details/${emp.book.bookDetail.isbn}`} style={{ textDecoration: 'none', color: 'black' }}>
        <div className="employee-list-items list-book">
          <div className="item">{emp.book.bookDetail.isbn}</div>
          <div className="item">{emp.book.bookDetail.title}</div>
          <div className="item">{format(new Date(emp.borrowed_at), 'dd-MM-yyyy')}</div>

          <div className="item">{format(new Date(emp.expected_return_date), 'dd-MM-yyyy')}</div>

          <div className="item">
            <button className="btn" onClick={toggalModal}>
              Return Now
            </button>
          </div>
          <div className="item">
            <button className="btn" onClick={toggalModalReview}>
              FeedBack
            </button>
          </div>
        </div>
      </Link>
      {showModal && <ShowModal onclose={toggalModal} isbn={emp.book.bookDetail.isbn} />}
      {showReview && <ShowModalReview onclose={toggalModalReview} isbn={emp.book.bookDetail.isbn} />}
    </>
  );
};

export default BorrowCard;
