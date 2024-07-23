/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import '../assets/styles/createEmployee/empcreate.styles.css';
import fields from '../utils/FormFields';
import EmployeeForm from '../components/createEmployee/employeeForm.jsx';
import { useNavigate } from 'react-router';
import { useAddEmployeeMutation } from '../api/employee/api.employee.jsx';
import { convertToPayload } from '../utils/ConvertData.js';
import { notifyError, notifySuccess } from '../utils/Toast.js';

const CreateEmployeeForm = () => {
    const [addEmployee, { isSuccess, isError, data, error }] = useAddEmployeeMutation();
    const navigate = useNavigate();
    const [employeeDetails, setEmployeeDetails] = useState({
        name: '',
        email: '',
        joiningDate: '',
        role: '',
        status: '',
        experience: '',
        address: '',
        pincode: '',
        department: '',
        employeePassword: '',
    });

    const handleInputChange = (inputName, inputValue) => {
        setEmployeeDetails((prevDetails) => ({
            ...prevDetails,
            [inputName]: inputValue,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = convertToPayload(employeeDetails);
        addEmployee(payload);
    };

    const resetContent = () => {
        navigate('/employee');
    };

    useEffect(() => {
        if (isSuccess) {
            notifySuccess('Employee added successfully');
            navigate('/employee');
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
                    <h1>Create Employee</h1>
                </div>
                <div className="component-create-employee">
                    <EmployeeForm
                        fields={fields}
                        handleSubmit={handleSubmit}
                        handleInputChange={handleInputChange}
                        resetContent={resetContent}
                        formState={employeeDetails}
                        isCreate={true}
                    />
                </div>
            </div>
        </>
    );
};

export default CreateEmployeeForm;
