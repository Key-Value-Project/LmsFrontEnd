// eslint-disable-next-line react/prop-types
const Button = ({ text, error }) => {
	const style = {
		background: "red",
	};

	return <button style={error ? style : { cursor: "pointer" }}>{text}</button>;
};

export default Button;
