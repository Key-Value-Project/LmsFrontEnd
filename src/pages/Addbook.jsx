import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import EmployeeForm from '../components/createEmployee/employeeForm';
import BookDetails from '../utils/BookDetails';
import { useCreateBookDetailsMutation } from '../api/library/api.library';
import { notifyError } from '../utils/Toast';

const AddBook = () => {
  let { id } = useParams();
  const [formState, setFormState] = useState({});
  const [creatBookDetails, { isSuccess, isError, data, error }] = useCreateBookDetailsMutation();

  const handleInputChange = (name, value) => {
    if (name === 'isbn') {
      value = parseInt(value);
    }
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);
    const response = await creatBookDetails(formState);
    console.log(response);
  };

  useEffect(() => {
    console.log(formState);
  }, [formState]);
  const resetContent = () => {
    navigate('/library');
  };

  useEffect(() => {
    if (isSuccess) {
      notifySuccess('Book details added successfully');
      navigate('/library');
    }
    if (isError && error.data && error.data.errors) {
      error.data.errors.forEach((errorMessage) => {
        notifyError(errorMessage);
      });
    }
  }, [isSuccess, isError]);

  return (
    <>
      <div className="Dashboard">
        <div className="top-header-create-employee">
          <h1>Book Information Entry</h1>
          <div className="top-header-components addbook"></div>
        </div>

        <div className="component-create-employee">
          <button className="btn">Upload Excel</button>
          <div className="excel"></div>
          <hr></hr>
          <div className="excel"></div>
          <EmployeeForm
            unique_id={'BOOK ID'}
            fields={BookDetails}
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            resetContent={resetContent}
            empID={id}
            formState={formState}
            page="bookEntry"
          />
        </div>
      </div>
    </>
  );
};

export default AddBook;
