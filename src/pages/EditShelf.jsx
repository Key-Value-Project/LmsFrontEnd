import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeForm from '../components/createEmployee/employeeForm';
import ShelfField from '../utils/ShelfField';
import { useCreateShelfMutation, useEditShelfMutation } from '../api/library/api.library';
import { notifyError, notifySuccess } from '../utils/Toast';

const EditShelf = () => {
  const navigate = useNavigate();

  let { id, code, location } = useParams();
  console.log(id, code, location);

  const [editShelf] = useEditShelfMutation();

  const [formState, setFormState] = useState({
    code: code,
    location: location,
  });
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
      const editShelfresponse = await editShelf({ id, formState });
      if (editShelfresponse.error) {
        console.log(editShelfresponse.error);
        let notification =
          editShelfresponse.error.data.message +
          (editShelfresponse.error.data.errors.length > 0 ? ': ' + editShelfresponse.error.data.errors.join(', ') : '');
        notifyError(notification);
      } else if (editShelfresponse.data) {
        notifySuccess('Shelf edit successfully');
        navigate('/library');
        resetContent();
      }
    } catch (error) {
      console.error(error);
      notifyError('Failed to edit shelf');
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
