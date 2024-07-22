import React from "react";
const SubscribePopUp = ({ open, handleClose, handleDelete }) => {
  return (
    <>
      {open && (
        <div className="delete-popup" data-testid="delete-popup">
          <div className="delete-popup-content">
            <h2>Do you wanna subscribe?</h2>
            <div className="sub">
              <input type="checkbox" />
              <label> Notify current reader</label>
            </div>
            <div className="delete-popup-buttons">
              <button type="submit" className="notify">
                Subscribe
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
