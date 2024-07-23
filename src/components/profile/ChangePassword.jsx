import '../../assets/styles/profile/profilePage.style.scss';

const PasswordChange = ({ handleSubmit }) => {
    return (
        <div className="password-box">
            <form className="password-form" onSubmit={handleSubmit}>
                <h2>Change Password</h2>
                <div className="password-form-elements">
                    <div className="password-input">
                        <label htmlFor="current-password">Current Password</label>
                        <input type="password" id="current-password" name="current-password" required />
                    </div>
                    <div className="password-input">
                        <label htmlFor="new-password">New Password</label>
                        <input type="password" id="new-password" name="new-password" required />
                    </div>
                    <div className="password-input">
                        <label htmlFor="confirm-password">Confirm New Password</label>
                        <input type="password" id="confirm-password" name="confirm-password" required />
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default PasswordChange;
