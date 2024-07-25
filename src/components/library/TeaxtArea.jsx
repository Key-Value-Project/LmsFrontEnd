const TextArea = ({ type, id, name, required, text, handleInputChange, value }) => {
  const onChange = (event) => {
    handleInputChange(event.target.id, event.target.value);
  };

  return (
    <div className="form-items">
      <label htmlFor="name">{text}</label>
      <textarea type={type} id={id} name={name} value={value} required placeholder={required} onChange={onChange} rows="3" cols="50" />
    </div>
  );
};

export default TextArea;
