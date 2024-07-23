import Scan from './Scan';
const ShowModal = ({ onclose }) => {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <Scan />
          <button
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              onclose();
            }}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowModal;
