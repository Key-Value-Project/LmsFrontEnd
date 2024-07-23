// eslint-disable-next-line react/prop-types
const DropDownMenu = ({ name, id, options, handleInputChange, value }) => {
  const onselect = (event) => {
    handleInputChange(event.target.id, event.target.value);
  };

  return (
    <div className="form-items">
      <label htmlFor={name}>{name}</label>
      <div className="drop-down">
        <select id={id} name={name} value={value || 'Select'} onChange={onselect}>
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
