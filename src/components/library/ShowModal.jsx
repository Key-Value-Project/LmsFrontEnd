import Scan from './Scan';
import '../../assets/styles/Library/library.style.scss';
const ShowModal = ({ onclose, isbn }) => {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={onclose}>
              x
            </span>
          </div>
          <Scan isbnv={isbn} />
        </div>
      </div>
    </>
  );
};

export default ShowModal;
