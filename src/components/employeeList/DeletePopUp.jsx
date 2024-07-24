import React from 'react';
import deleteIcon from '../../assets/icons/deleteIcon.svg';

const DeletePopUp = ({ open, handleClose, handleDelete }) => {
  return (
    <>
      {open && (
        <>
          <div className="delete-popup" data-testid="delete-popup">
            <div className="delete-popup-content">
              <img className="delete__icon" src={deleteIcon} alt="delete" />

              <h2>Are you sure you want to delete?</h2>
              <p>This action will delete the book from the corresponding shelf and this action is irreversible.</p>
              <div className="delete-popup-buttons">
                <button onClick={handleDelete}>Yes</button>
                <button onClick={handleClose}>No</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DeletePopUp;
