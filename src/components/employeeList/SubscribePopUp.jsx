import React from 'react';
import { useState } from 'react';

const SubscribePopUp = ({ open, handleClose, handleDelete }) => {
  const [notify, setNotify] = useState(false);
  return (
    <>
      {open && (
        <div className="delete-popup" data-testid="delete-popup">
          <div className="delete-popup-content">
            <h2>Do you wanna subscribe?</h2>
            <p className="sub__popup">You will get a notification when this book gets available back.</p>

            <div className="sub">
              <input type="checkbox" value={notify} onChange={(e) => setNotify(!notify)} />
              <label> Notify current reader</label>
            </div>
            <div className="delete-popup-buttons">
              <button
                type="submit"
                className="notify"
                onClick={(e) => {
                  e.preventDefault();
                  handleDelete(notify);
                }}
              >
                Yes
              </button>
              <button onClick={handleClose}>No</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubscribePopUp;
