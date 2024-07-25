import { useEffect, useState } from 'react';
import { useBorrowBookMutation, useGetAllShelvesQuery, useReturnBookMutation } from '../../api/library/api.library';
import scan from '../../assets/icons/scan.svg';
import { notifyError, notifySuccess } from '../../utils/Toast';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { removeScannerIsbn } from '../../store/ScannerReducer';

const ReturnScan = ({ handleClick = () => {}, type = '' }) => {
  const { data } = useGetAllShelvesQuery();
  const [isbn, setIsbn] = useState('');
  const [shelf, setShelf] = useState('');
  const [qrOn, setStateqrOn] = useState(false);
  const navigate = useNavigate();
  const isbnv = useSelector((state) => state.scanner);
  const [returnbook] = useReturnBookMutation();
  handleClick = async () => {
    console.log('handleclick', isbnv, shelf);
    const borrowData = await returnbook({ isbn: parseInt(isbnv), shelf_id: shelf });
    console.log(borrowData);
    if (borrowData.error) {
      let notification =
        borrowData.error.data.message + (borrowData.error.data.errors.length > 0 ? ': ' + borrowData.error.data.errors.join(', ') : '');
      notifyError(notification);
    } else {
      notifySuccess('Book returned successfully');
      navigate('/library');
    }
    dispatch(removeScannerIsbn());
  };

  return (
    <div className="scan__form">
      <div className="icon"></div>
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
            }
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReturnScan;
