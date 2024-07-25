import { useEffect, useState } from 'react';
import { useBorrowBookMutation, useGetAllShelvesQuery } from '../../api/library/api.library';
import scan from '../../assets/icons/scan.svg';
import { notifyError } from '../../utils/Toast';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { removeScannerIsbn } from '../../store/ScannerReducer';

const Scan = ({ handleClick = () => {}, type = '' }) => {
  const { data } = useGetAllShelvesQuery();
  const [isbn, setIsbn] = useState('');
  const [shelf, setShelf] = useState('');
  const [qrOn, setStateqrOn] = useState(false);
  const [isbnv, setIsbnv] = useState('');
  const navigate = useNavigate();

  const scannerIsbn = useSelector((state) => state.scanner);
  console.log('scannerIsbn', scannerIsbn);
  useEffect(() => {
    if (scannerIsbn) {
      console.log('scanner isbn in scan', scannerIsbn);
      setIsbnv(parseInt(scannerIsbn));
    }
  }, [scannerIsbn]);

  const onClick = () => {
    setStateqrOn(true);
    if (type === 'return') {
      navigate('/library/barcode/return');
    } else {
      navigate('/library/barcode/borrow');
    }
  };

  return (
    <div className="scan__form">
      <div className="icon">
        <img src={scan} onClick={onClick} />
      </div>
      <div className="scan__input">
        {isbnv ? (
          <input type="number" placeholder={isbnv} value={isbnv} disabled />
        ) : (
          <input type="number" placeholder="Enter ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
        )}
        <select value={shelf} onChange={(e) => setShelf(e.target.value)}>
          <option value="">Select Shelf</option>
          {data &&
            data.map((shelf, index) => (
              <option key={index} value={shelf.id}>
                {shelf.code}
              </option>
            ))}
        </select>
      </div>
      <div className="modal__btn">
        <button
          className="btn "
          onClick={(e) => {
            e.preventDefault();
            if (isbnv) {
              handleClick(isbnv, shelf);
            } else {
              handleClick(isbn, shelf);
            }
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Scan;
