// eslint-disable-next-line react/prop-types
const DeletePopUp = ({ open, handleClose, handleDelete }) => {

	return (
		<>
			{open && (
				<div className="delete-popup">
					<div className="delete-popup-content">
						<h2>Are you sure you want to delete?</h2>
						<div className="delete-popup-buttons">
							<button onClick={handleDelete}>Yes</button>
							<button onClick={handleClose}>No</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default DeletePopUp;
