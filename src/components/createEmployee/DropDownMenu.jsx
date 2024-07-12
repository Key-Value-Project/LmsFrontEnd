// eslint-disable-next-line react/prop-types
const DropDownMenu = ({ name, options, employeedetails }) => {
	const onselect = (event) => {
		employeedetails(event.target.name, event.target.value);
	};

	return (
		<div className="form-items">
			<label htmlFor={name}>{name}</label>
			<div className="drop-down">
				<select id={name} name={name} required defaultValue={"Select"} onChange={onselect}>
					<option value="Select" disabled>
						Select
					</option>
					{
						// eslint-disable-next-line react/prop-types
						options.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))
					}
				</select>
			</div>
		</div>
	);
};

export default DropDownMenu;
