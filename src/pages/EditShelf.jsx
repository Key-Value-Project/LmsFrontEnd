import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeForm from '../components/createEmployee/employeeForm';
import ShelfField from '../utils/ShelfField';
import { useCreateShelfMutation } from '../api/library/api.library';
import { notifyError, notifySuccess } from '../utils/Toast';

const EditShelf = () => {
  const navigate = useNavigate();

  let { id } = useParams();

  const [formState, setFormState] = useState({});
  const [createShelf] = useCreateShelfMutation();

  const handleInputChange = (name, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetContent = () => {
    navigate('/library/shelf');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createShelfresponse = await createShelf(formState);
      if (createShelfresponse.error) {
        console.log(createShelfresponse.error);
        let notification =
          createShelfresponse.error.data.message +
          (createShelfresponse.error.data.errors.length > 0 ? ': ' + createShelfresponse.error.data.errors.join(', ') : '');
        notifyError(notification);
      } else if (createShelfresponse.data) {
        notifySuccess('Shelf created successfully');
        navigate('/library');
        resetContent();
      }
    } catch (error) {
      console.error(error);
      notifyError('Failed to create shelf');
    }
  };
  return (
    <>
      <div className="Dashboard">
        <div className="top-header-create-employee">
          <h1>Edit Shelf</h1>
        </div>

        <div className="component-create-employee">
          <EmployeeForm
            fields={ShelfField}
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            resetContent={resetContent}
            formState={formState}
            isEdit={true}
            unique_id="Shelf ID"
            empID={id}
          />
        </div>
      </div>
    </>
  );
};

export default EditShelf;
