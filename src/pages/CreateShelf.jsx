import { useState } from 'react';
import EmployeeForm from '../components/createEmployee/employeeForm';
import ShelfField from '../utils/ShelfField';

const CreateShelf = () => {
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

                    <h1>Create Shelf</h1>

                </div>

                <div className="component-create-employee">
                    <EmployeeForm
                        fields={ShelfField}
                        handleSubmit={handleSubmit}
                        handleInputChange={handleInputChange}
                        resetContent={resetContent}
                        formState={formState}
                    />
                </div>
            </div>
        </>
    );
};

export default CreateShelf;
