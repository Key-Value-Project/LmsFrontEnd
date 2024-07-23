import React, { useState } from 'react';
import { Availability } from './Availability';
import SubscribePopUp from '../employeeList/SubscribePopUp';
import LibHead from './LibHead';
import { notifyError, notifySuccess } from '../../utils/Toast';
import { useNavigate } from 'react-router-dom';
import LibCard from './LibCard';
import { useBorrowBookMutation } from '../../api/library/api.library';
import { useEffect } from 'react';

const BookDetailsCard = ({ emp = {}, Role }) => {
  const navigate = useNavigate();
  const [bookImage, setBookImage] = useState('');
  let shelves = [];
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [borrowBook, { data, error, isLoading, isError, isSuccess }] = useBorrowBookMutation();
  const handleDeleteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDeleteDialog(true);
  };

  const handleDelete = () => {
    deleteEmployee(details.id);
    setDeleteDialog(false);
  };

  const handleClose = () => {
    setDeleteDialog(false);
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
    console.log(shelves);
  }

  return (
    <>
      <div className="details-component" data-testid="test-details-card">
        <div className="details-card-item">
          <div className="details-card-item-label">ISBN</div>
          <p>{emp.isbn}</p>
        </div>
        <div className="details-card-item">
          <div className="details-card-item-label">Employee title</div>
          <p>{emp.title}</p>
        </div>
        <div className="details-card-item">
          <div className="details-card-item-label">Author</div>
          <p>{emp.author}</p>
        </div>
        <div className="details-card-item">
          <div className="details-card-item-label">Description</div>
          <p>{emp.description}</p>
        </div>

        <div className="details-card-item">
          <div className="details-card-item-label">Availability</div>
          <Availability status={emp.status} />
        </div>

        {emp.status == 'Available' ? (
          <> </>
        ) : (
          <div className="btns">
            <button type="submit" className="subscribe" onClick={handleDeleteClick}>
              Notify Me!
            </button>
          </div>
        )}
      </div>

      <div className="book-list">
        <LibHead heads={['Shelf Code', 'Shelf Location', '', '', '', 'Action']} Role="det" />
        <div className="employee-list">
          {console.log('shelves', shelves.length)}
          {shelves &&
            shelves.map((shelf, index) => {
              if (shelf)
                return (
                  <LibCard key={index} shelf_id={shelf.id} isbn={shelf.code} title={shelf.location} Role={'borrow'} data={emp} readnow={borrowBook} />
                );
            })}
        </div>
      </div>

      <SubscribePopUp open={deleteDialog} handleClose={handleClose} handleDelete={handleDelete} />
    </>
  );
};

export default BookDetailsCard;
