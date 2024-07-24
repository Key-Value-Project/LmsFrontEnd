import { useState } from 'react';
import { useBorrowBookMutation, useGetAllShelvesQuery } from '../../api/library/api.library';
import scan from '../../assets/icons/scan.svg';
import { useEffect } from 'react';
import { notifyError } from '../../utils/Toast';

const Scan = ({ isbnv }) => {
  const { data } = useGetAllShelvesQuery();
  const [isbn, setIsbn] = useState('');
  const [shelf, setShelf] = useState('');
  const [borrow, { isSuccess, isError, datas, error }] = useBorrowBookMutation();
  const handleClick = async () => {
    const checkborrow = await borrow({ isbn: parseInt(isbn), shelf_id: shelf });
    console.log(checkborrow);
  };
  useEffect(() => {
    if (isSuccess) {
      notifySuccess('Employee added successfully');
      navigate('/employee');
    }
    if (isError && error.data && error.data.errors) {
      error.data.errors.forEach((errorMessage) => {
        console.log(errorMessage);
        notifyError(errorMessage);
      });
    }
  }, [isSuccess, isError]);

  return (
    <div className="scan__form">
      <div className="icon">
        <img src={scan} />
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
            handleClick();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Scan;
