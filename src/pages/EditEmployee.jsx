import { useParams } from "react-router";
import EmployeeForm from "../components/createEmployee/employeeForm";
import fields from "../utils/FormFields";

const EditEmployee = () => {

    let { id } = useParams();
    
	return (
		<>
			<div className="Dashboard">
				<div className="top-header-create-employee">
					<h1>Edit Employee</h1>
				</div>
				<div className="component-create-employee">
					<EmployeeForm
						fields={fields}
						// handleSubmit={handleSubmit}
						// handleInputChange={handleInputChange}
						// resetContent={resetContent}
                        isEdit={true}
                        empID={id}
					/>
				</div>
			</div>
		</>
	);
};

export default EditEmployee;
