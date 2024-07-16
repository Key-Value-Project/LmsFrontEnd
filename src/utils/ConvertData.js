export const convertToPayload = (employeeDetails) => {
	const { name, email, experience, status, address, pincode, department, employeePassword, role } = employeeDetails;
	const payload = {
		name,
		email,
		experience: Number(experience), // Convert experience to Number
		status,
		address: {
			line1: address,
			pincode,
		},
		department: {
			name: department,
		},
		password: employeePassword,
		role,
	};
	return payload;
};

export const convertToData = (payload) => {
	return {
		id: payload.id,
		name: payload.name,
		email: payload.email,
		joiningDate: payload.createdAt,
		role: payload.role,
		status: payload.status,
		experience: payload.experience.toString(), // Convert experience back to String
		address: payload.address.line1,
		pincode: payload.address.pincode,
		department: payload.department.name,
		employeePassword: payload.password,
	};
};
