import { useParams } from 'react-router';
import { useState } from 'react';
import EmployeeForm from '../components/createEmployee/employeeForm';
import BookField from '../utils/BookField';
import getRole from '../utils/TokenDecode';
import { Link } from 'react-router-dom';
import plusIcon from '../assets/icons/plus-circle.svg';
import BookDetails from '../utils/BookDetails';

const AddBook = () => {
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
