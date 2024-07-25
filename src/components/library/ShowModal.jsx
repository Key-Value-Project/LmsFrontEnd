import Scan from './Scan';
import '../../assets/styles/Library/library.style.scss';
import { useDispatch } from 'react-redux';
import { addScannerIsbn } from '../../store/ScannerReducer';
const ShowModal = ({ type, onclose, isbn, handleClick }) => {
  const dispatch = useDispatch();
  if (type === 'returnisbn') {
    dispatch(addScannerIsbn(isbn));
  }
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
          {type === 'returnisbn' && <Scan isbnv={isbn} handleClick={handleClick} type="return" />}
          {type === 'return' && <Scan handleClick={handleClick} type={'return'} />}
          {type === 'borrow' && <Scan handleClick={handleClick} />}
        </div>
      </div>
    </>
  );
};

export default ShowModal;
