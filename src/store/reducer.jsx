//Action Types
const actionTypes = {
	ADD_EMPLOYEE: "ADD_EMPLOYEE",
	DELETE_EMPLOYEE: "DELETE_EMPLOYEE",
	UPDATE_EMPLOYEE: "UPDATE_EMPLOYEE",
};

//Reducer Function depreciated due to the use of Redux Toolkit
const reducer = (state = [], action) => {
    switch (action.type) {
        
		case actionTypes.ADD_EMPLOYEE:
			return {
				...state,
				employees: [...state.employees, action.payload],
            };
        
		case actionTypes.DELETE_EMPLOYEE:
			return {
				...state,
				employees: state.employees.filter((employee) => employee.employeeID !== action.payload),
            };
        
		case actionTypes.UPDATE_EMPLOYEE:
			return {
				...state,
				employees: state.employees.map((employee) => {
					if (employee.employeeID === action.payload.employeeID) {
						return action.payload;
					}
					return employee;
				}),
            };
        
		default:
			return state;
	}
};

export { reducer as default, actionTypes };
