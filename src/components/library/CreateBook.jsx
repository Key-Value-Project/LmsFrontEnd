import { useParams } from "react-router";
import EmployeeForm from "../createEmployee/employeeForm";
import { useState } from "react";
import BookField from "../../utils/BookField";
const CreateBook = () => {
  let { id } = useParams();
  const [formState, setFormState] = useState({});
  const handleInputChange = (name, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetContent = () => {
    navigate("/library");
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
          <h1>Create Book Details</h1>
        </div>

        <div className="component-create-employee">
          <EmployeeForm
            unique_id={"BOOK ID"}
            fields={BookField}
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

export default CreateBook;
