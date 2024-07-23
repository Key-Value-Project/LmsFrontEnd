import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import EmployeeForm from '../components/createEmployee/employeeForm';
import BookField from '../utils/BookField';
import getRole from '../utils/TokenDecode';
import { Link } from 'react-router-dom';
import plusIcon from '../assets/icons/plus-circle.svg';
import BookDetails from '../utils/BookDetails';
import { useCreateBookDetailsMutation } from '../api/library/api.library';

const AddBook = () => {
  let { id } = useParams();
  const [formState, setFormState] = useState({});
  const [creatBookDetails] = useCreateBookDetailsMutation();
  const handleInputChange = (name, value) => {
    if (name === 'isbn') {
      value = parseInt(value);
    }
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(formState);
  }, [formState]);
  const resetContent = () => {
    navigate('/library');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);
    const response = await creatBookDetails(formState);
    console.log(response);
  };
  return (
    <>
      <div className="Dashboard">
        <div className="top-header-create-employee">
          <h1>Add Book Details</h1>
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
          />
        </div>
      </div>
    </>
  );
};

export default AddBook;
