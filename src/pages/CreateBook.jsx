import { useParams } from 'react-router';
import { useState } from 'react';
import EmployeeForm from '../components/createEmployee/employeeForm';
import BookField from '../utils/BookField';
import getRole from '../utils/TokenDecode';
import { Link } from 'react-router-dom';
import plusIcon from '../assets/icons/plus-circle.svg';

import { useGetAllShelvesQuery } from '../api/library/api.library';

const CreateBook = () => {
  const { data } = useGetAllShelvesQuery();
  const [shelf, setShelf] = useState('');

  let { id } = useParams();
  const [formState, setFormState] = useState({});
  const handleInputChange = (name, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetContent = () => {
    navigate('/library');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = convertToPayload(formState);
    payload.id = id;
    delete payload.password;
    await updateEmployee(payload);
    await updateEmployeeRelation(payload);
  };
  return (
    <>
      <div className="Dashboard">
        <div className="top-header-create-employee">
          <h1>Create Book</h1>
          <div className="top-header-components addbook">
            {getRole() === 'ADMIN' ? (
              <Link to="/library/addbook" style={{ textDecoration: 'none', color: 'black' }}>
                <div className="create-button-emp">
                  <img src={plusIcon} alt="create button" />
                  <span>Add new Book</span>
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
              <input type="text" placeholder="Enter the isbn" />
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
