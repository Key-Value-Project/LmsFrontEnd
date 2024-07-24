import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import EmployeeForm from '../components/createEmployee/employeeForm';
import BookField from '../utils/BookField';
import getRole from '../utils/TokenDecode';
import { Link } from 'react-router-dom';
import plusIcon from '../assets/icons/plus-circle.svg';
import { notifyError } from '../utils/Toast';
import { useCreateBookDetailsMutation, useCreateBookMutation, useGetAllShelvesQuery } from '../api/library/api.library';
import { notifySuccess } from '../utils/Toast';

const CreateBook = () => {
  const { data } = useGetAllShelvesQuery();
  const [shelf, setShelf] = useState('');
  const [isbn, setIsbn] = useState('');
  const [createBook, { isSuccess, isError, datas, error }] = useCreateBookMutation();
  const navigate = useNavigate();
  let { id } = useParams();
  const [formState, setFormState] = useState({});

  useEffect(() => {
    if (isSuccess) {
      notifySuccess('Book details added successfully');
      navigate('/library');
    }
    if (isError && error.data && error.data.errors) {
      error.data.errors.forEach((errorMessage) => {
        notifyError(errorMessage);
      });
      navigate('/library/addbook');
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    console.log(formState);
  }, [formState]);
  const resetContent = () => {
    navigate('/library');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createBook({ isbn: parseInt(isbn), shelf_id: shelf });
    console.log(response);
  };
  return (
    <>
      <div className="Dashboard">
        <div className="top-header-create-employee">
          <h1>Book Registration</h1>
          <div className="top-header-components addbook">
            {getRole() === 'ADMIN' ? (
              <Link to="/library/addbook" style={{ textDecoration: 'none', color: 'black' }}>
                <div className="create-button-emp">
                  <img src={plusIcon} alt="create button" />
                  <span>Book Information</span>
                </div>
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="component-create-employee">
          <button className="btn">Upload Excel</button>
          <div className="excel"></div>
          <hr></hr>
          <div className="excel"></div>
          <div className="books__cr" id="form-create-employee">
            <div className="book__label form-items">
              <label>ISBN</label>
              <input
                type="text"
                placeholder="Enter the isbn"
                value={isbn}
                onChange={(e) => {
                  setIsbn(e.target.value);
                }}
              />
            </div>
            <div className="book__label form-items">
              <label>Shelf Number</label>
              <div className="drop-down">
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
            </div>
          </div>
          <div className="form-button">
            <button onClick={handleSubmit} type="submit">
              Submit
            </button>
            <button onClick={resetContent} type="button">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBook;
