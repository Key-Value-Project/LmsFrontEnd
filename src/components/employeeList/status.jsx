// eslint-disable-next-line react/prop-types
export const Status = ({ status }) => {
	const statusColor = () => {
		if (status === "Active") {
			return "#c6f5b0";
		} else if (status === "In Active") {
			return "#f2bdc1";
		} else {
			return "#f5eba9";
		}
	};

	const statusStyle = {
		width: "fit-content",
		backgroundColor: statusColor(),
		borderRadius: "15px",
		padding: "5px 15px",
		cursor: "pointer",
	};

	return <p style={statusStyle}>{status}</p>;
};
