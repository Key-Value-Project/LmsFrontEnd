import SubscribePopUp from '../employeeList/SubscribePopUp';
import LibHead from './LibHead';
import starIcon from '../../assets/icons/starIcon.svg';
import notify from '../../assets/icons/notify.svg';
import LibCard from './LibCard';
import React, { useState } from 'react';
import { Availability } from './Availability';
import { notifyError } from '../../utils/Toast';
import { useBorrowBookMutation } from '../../api/library/api.library';
import { useEffect } from 'react';

const BookDetailsCard = ({ emp = {} }) => {
  let shelves = [];
  const [subDialog, setSubDialog] = useState(false);
  const [borrowBook, { data, error, isLoading, isError, isSuccess }] = useBorrowBookMutation();

  const handleSubClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSubDialog(true);
  };

  const handleSub = () => {
    deleteEmployee(details.id);
    setSubDialog(false);
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
          {/* checking availability of books and notifying */}
          <div className="book__available">
            <div className="avai">
              <Availability status={emp.status} />
            </div>
            {emp.status == 'Available' ? (
              <> </>
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
                      Role={'borrow'}
                      data={emp}
                      readnow={borrowBook}
                    />
                  );
              })}
          </div>
        </div>
      )}

      <SubscribePopUp open={subDialog} handleClose={handleClose} handleDelete={handleSub} />
    </>
  );
};

export default BookDetailsCard;
