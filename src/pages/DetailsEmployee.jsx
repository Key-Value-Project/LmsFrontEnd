/* eslint-disable react/prop-types */
import { useParams } from 'react-router';
import '../assets/styles/detailsEmployee/detailEmp.scss';
import { Link } from 'react-router-dom';
import pencilIcon from '../assets/icons/pencil-circle.svg';
import DetailsCard from '../components/detailsEmployee/DetailsCard';
import { useGetEmployeeDetailsQuery } from '../api/employee/api.employee';
import { useEffect } from 'react';
import getRole from '../utils/TokenDecode';

const DetailsEmployee = () => {
    const { id } = useParams();

    // get employee details from state having employeeID equal to id
    const { data, isSuccess } = useGetEmployeeDetailsQuery(id);
    useEffect(() => {
        if (isSuccess) {
            console.log(data);
        }
    }, [data, isSuccess]);

    return (
        <div className="Dashboard">
            <div className="top-header-employee-details">
                <h1>Employee Details</h1>
                <div className="top-header-components">
                    {getRole() === 'ADMIN' ? (
                        <Link to={`/employee/edit/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <div className="edit-button-emp">
                                <img src={pencilIcon} alt="edit button" />
                                <span>Edit</span>
                            </div>
                        </Link>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            <DetailsCard emp={data} />
        </div>
    );
};

export default DetailsEmployee;
