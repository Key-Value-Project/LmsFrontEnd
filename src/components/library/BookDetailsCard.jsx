import SubscribePopUp from '../employeeList/SubscribePopUp';
import LibHead from './LibHead';
import starIcon from '../../assets/icons/starIcon.svg';
import notify from '../../assets/icons/notify.svg';
import message from '../../assets/icons/message.svg';
import ReviewComm from '../../assets/icons/review-comm.svg';
import { notifyError, notifySuccess } from '../../utils/Toast';
import { useNavigate } from 'react-router-dom';
import LibCard from './LibCard';
import React, { useState } from 'react';
import { Availability } from './Availability';
import { useBorrowBookMutation, useCheckSubscriptionQuery, useSetSubscribeMutation, useSetUnsubscribeMutation } from '../../api/library/api.library';
import { useEffect } from 'react';
import ReviewsPanel from './ReviewsPanel';
import { useGetReviewsByBookIdQuery } from '../../api/library/api.reviews';
import UnSubscribePopUp from '../../utils/UnsubscribePopup';

const BookDetailsCard = ({ emp = {} }) => {
  const navigate = useNavigate();
  const [bookImage, setBookImage] = useState('');
  let shelves = [];
  const [subDialog, setSubDialog] = useState(false);
  const [unsubDialog, setUnsubDialog] = useState(false);
  const [borrowBook, { data, error, isLoading, isError, isSuccess }] = useBorrowBookMutation();
  const [setSubscribe] = useSetSubscribeMutation();
  const [setUnsubscribe] = useSetUnsubscribeMutation();
  const { data: checkSubscription, isSuccess: isSub } = useCheckSubscriptionQuery({ isbn: emp.isbn });

  const { data: reviews, isSuccess: reviewIsSuccess, isError: reviewIsError } = useGetReviewsByBookIdQuery(emp.isbn);

  useEffect(() => {
    if (reviewIsError) {
      notifyError('Error in fetching reviews');
    }
    if (reviewIsSuccess) {
      console.log(reviews);
    }
  }, [isError, isSuccess, reviews]);

  useEffect(() => {
    console.log('check', checkSubscription);
    console.log(isSub);
  }, [isSub]);

  const handleSubClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSubDialog(true);
  };

  const handleUnsubClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setUnsubDialog(true);
  };

  const handleSub = async (notify) => {
    const response = await setSubscribe({
      isbn: emp.isbn,
      sent_request: notify,
    });
    setSubDialog(false);
    if (response.error) {
      notifyError('Error in subscribing');
    } else {
      notifySuccess('Subscribed successfully');
    }
  };

  const handleUnsub = async (notify) => {
    const response = await setUnsubscribe({
      isbn: emp.isbn,
    });
    setUnsubDialog(false);
    if (response.error) {
      notifyError('Error unsubscribing');
    } else {
      notifySuccess('Unsubscribed successfully');
    }
  };

  const handleClose = () => {
    setSubDialog(false);
  };
  const unsubHandleClose = () => {
    setUnsubDialog(false);
  };

  useEffect(() => {
    if (isSuccess !== undefined && isSuccess) {
      notifySuccess('Book taken successfully');
      navigate('/library');
    }
    if (isError !== undefined && isError && error.data && error.data.errors) {
      error.data.errors.forEach((errorMessage) => {
        console.log(errorMessage);
        notifyError(errorMessage);
      });
    }
  }, [isSuccess, isError]);

  if (emp) {
    shelves = emp.books.map((book) => book.shelf);
  }

  return (
    <>
      <div className="book_det_cont">
        <div className="book__det">
          <div className="book__title">{emp.title}</div>
          <div className="book__author">By {emp.author}</div>

          <div className="ratings" style={{ display: 'Flex', gap: '10px' }}>
            {reviewIsSuccess && [...Array(Math.floor(reviews.averageRatingOutOf5))].map((_, i) => <img key={i} src={starIcon} alt="star" />)}
          </div>
          <a href="#rev" className="rev">
            <div className="ratings">
              {reviewIsSuccess && <label style={{ fontStyle: 'italic' }}>{reviews.averageRatingOutOf5.toFixed(1)} Ratings</label>}
            </div>
          </a>
          {/* checking availability of books and notifying */}
          <div className="book__available">
            <div className="avai">
              <Availability status={emp.status} />
            </div>
            {emp.status === 'Available' ? (
              <> </>
            ) : isSub && checkSubscription === 'subscribed' ? (
              <div className="book__notify">
                <button onClick={handleUnsubClick}>Unsubscribe</button>
              </div>
            ) : (
              <div className="book__notify">
                <img src={notify} alt="notify" onClick={handleSubClick} />
              </div>
            )}
          </div>
        </div>
        <div className="book_det">
          <div className="details-card-item">
            <div className="book__isbn">ISBN: {emp.isbn}</div>
            <div className="details-card-item-label">Description</div>
            <p className="desc">{emp.description}</p>
          </div>
        </div>
      </div>

      {/* showing available shelves */}
      {emp.status == 'Available' && (
        <div className="book-list lib-shelf">
          <LibHead heads={['Shelf Code', 'Shelf Location', '', '']} Role="det" />
          <div className="employee-list">
            {console.log('shelves', shelves.length)}
            {shelves &&
              shelves.map((shelf, index) => {
                if (shelf)
                  return (
                    <LibCard
                      key={index}
                      shelf_id={shelf.id}
                      isbn={shelf.code}
                      author={null}
                      status={null}
                      title={shelf.location}
                      Role="borrow"
                      data={emp}
                      readnow={borrowBook}
                    />
                  );
              })}
          </div>
        </div>
      )}
      {reviewIsSuccess && <ReviewsPanel reviews={reviews.reviews} />}
      <br></br>

      <SubscribePopUp open={subDialog} handleClose={handleClose} handleDelete={handleSub} />
      <UnSubscribePopUp open={unsubDialog} handleClose={unsubHandleClose} handleDelete={handleUnsub} />
    </>
  );
};

export default BookDetailsCard;
