import React from "react";

export const Status = ({ status }) => {
	const statusColor = () => {
		if (status === "Active") {
			return "#c6f5b0";
		} else if (status === "In Active") {
			return "#f2bdc1";
		} else if (status === "On Leave") {
			return "#f5eba9";
		}
		else {
			return "#f5f5f5";
		}
	};

	const statusStyle = {
		width: "fit-content",
		backgroundColor: statusColor(),
		borderRadius: "15px",
		padding: "5px 15px",
		cursor: "pointer",
	};

	return (
		<p style={statusStyle} data-testid="test-status">
			{status}
		</p>
	);
};
