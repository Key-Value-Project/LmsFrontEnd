// eslint-disable-next-line react/prop-types
const TextField = ({ type, id, name, required, text, handleInputChange, value }) => {
    const onChange = (event) => {
        handleInputChange(event.target.id, event.target.value);
    };

    return (
        <div className="form-items">
            <label htmlFor="name">{text}</label>
            <input type={type} id={id} name={name} value={value} required placeholder={required} onChange={onChange} />
        </div>
    );
};

export default TextField;
