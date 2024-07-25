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
import { useBorrowBookMutation, useCheckSubscriptionQuery, useSetSubscribeMutation } from '../../api/library/api.library';
import { useEffect } from 'react';

const BookDetailsCard = ({ emp = {} }) => {
  const navigate = useNavigate();
  const [bookImage, setBookImage] = useState('');
  let shelves = [];
  const [subDialog, setSubDialog] = useState(false);
  const [borrowBook, { data, error, isLoading, isError, isSuccess }] = useBorrowBookMutation();
  const [setSubscribe] = useSetSubscribeMutation();
  const { data: checkSubscription, isSuccess: isSub } = useCheckSubscriptionQuery({ isbn: emp.isbn });

  useEffect(() => {
    console.log('check', checkSubscription);
    console.log(isSub);
  }, [isSub]);

  const handleSubClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSubDialog(true);
  };

  const handleSub = async (notify) => {
    const response = await setSubscribe({
      isbn: emp.isbn,
      sent_request: notify,
    });
    if (response.error) {
      notifyError('Error in subscribing');
    } else {
      notifySuccess('Subscribed successfully');
    }
  };

  const handleClose = () => {
    setSubDialog(false);
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

          <div className="ratings">
            <img src={starIcon} alt="star" />
          </div>
          <a href="#rev" className="rev">
            <div className="ratings">
              <img src={ReviewComm} /> <label>14 Reviews</label>
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
              <p>Subscribed</p>
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
        <div className="book-list">
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

      <div className="rev_cont" id="rev">
        <div className="book__det">
          <h2 className="review__head">Reviews</h2>
          <div className="review-content">
            <div className="each_rev">
              <div>John</div>

              <img src={starIcon} alt="star" />
            </div>

            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam debitis molestias vitae cumque nesciunt. Quos consequuntur aliquam
              inventore quae mollitia quo autem ullam soluta totam, voluptate voluptatem, similique placeat voluptatibus.
            </div>
          </div>
          <div className="review-content">
            <div className="each_rev">
              <div>John</div>

              <img src={starIcon} alt="star" />
            </div>

            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam debitis molestias vitae cumque nesciunt. Quos consequuntur aliquam
              inventore quae mollitia quo autem ullam soluta totam, voluptate voluptatem, similique placeat voluptatibus.
            </div>
          </div>
          <div className="review-content">
            <div className="each_rev">
              <div>John</div>

              <img src={starIcon} alt="star" />
            </div>

            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam debitis molestias vitae cumque nesciunt. Quos consequuntur aliquam
              inventore quae mollitia quo autem ullam soluta totam, voluptate voluptatem, similique placeat voluptatibus.
            </div>
          </div>
          <div className="review-content">
            <div className="each_rev">
              <div>John</div>

              <img src={starIcon} alt="star" />
            </div>

            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam debitis molestias vitae cumque nesciunt. Quos consequuntur aliquam
              inventore quae mollitia quo autem ullam soluta totam, voluptate voluptatem, similique placeat voluptatibus.
            </div>
          </div>
        </div>
      </div>
      <br></br>

      <SubscribePopUp open={subDialog} handleClose={handleClose} handleDelete={handleSub} />
    </>
  );
};

export default BookDetailsCard;
