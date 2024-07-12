// eslint-disable-next-line react/prop-types
const TextField = ({ type, id, name, required, text, employeedetails }) => {
	const onChange = (event) => {
		employeedetails(event.target.name, event.target.value);
	};

	return (
		<div className="form-items">
			<label htmlFor="name">{text}</label>
			<input type={type} id={id} name={name} required placeholder={required} onChange={onChange} />
		</div>
	);
};

export default TextField;
