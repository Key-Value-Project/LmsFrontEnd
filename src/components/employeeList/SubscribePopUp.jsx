import React from "react";
const SubscribePopUp = ({ open, handleClose, handleDelete }) => {
  return (
    <>
      {open && (
        <div className="delete-popup" data-testid="delete-popup">
          <div className="delete-popup-content">
            <h2>Yeyyy!!! You have Successfully subscribed</h2>
            <div className="delete-popup-buttons">
              <button type="submit" className="notify">
                Notify
              </button>
              <button onClick={handleClose}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubscribePopUp;
