import Scan from './Scan';
import '../../assets/styles/Library/library.style.scss';
const ShowModal = ({ type, onclose, isbn, handleClick }) => {
  console.log(type, isbn);
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={onclose}>
              x
            </span>
          </div>
          {type === 'returnisbn' && <Scan isbnv={isbn} handleClick={handleClick} />}
          {type === 'return' && <Scan handleClick={handleClick} />}
        </div>
      </div>
    </>
  );
};

export default ShowModal;
