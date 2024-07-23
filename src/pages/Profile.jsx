import { useEffect } from 'react';
import { useGetUserDetailsQuery, useUpdatePasswordMutation } from '../api/employee/api.employee';
import { Link } from 'react-router-dom';
import pencilIcon from '../assets/icons/pencil-circle.svg';
import DetailsCard from '../components/detailsEmployee/DetailsCard';
import PasswordChange from '../components/profile/ChangePassword';
import { notifyError, notifySuccess, notifyWarn } from '../utils/Toast';

const Profile = () => {
  const { data: userDetails, isSuccess } = useGetUserDetailsQuery();
  const [updatePassword, { isSuccess: passwordSuccess, isError: passwordError, error }] = useUpdatePasswordMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentPassword = e.target.elements['current-password'].value;
    const newPassword = e.target.elements['new-password'].value;
    const confirmPassword = e.target.elements['confirm-password'].value;
    if (newPassword !== confirmPassword) {
      notifyWarn('Passwords do not match !');
      return;
    } else {
      const payload = {
        passwordOld: currentPassword,
        passwordNew: newPassword,
      };
      updatePassword(payload);
    }
  };

  useEffect(() => {
    if (passwordSuccess) {
      notifySuccess('Password changed successfully');
    } else if (passwordError) {
      let notification = error.data.message + (error.data.errors.length > 0 ? ': ' + error.data.errors.join(', ') : '');
      notifyError(notification);
    }
  }, [passwordSuccess, passwordError]);

  return (
    <div className="Dashboard">
      <div className="top-header-employee-details">
        <h1>Profile</h1>
        <div className="top-header-components">
          <Link to={`/employee/edit/${userDetails?.id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <div className="edit-button-emp">
              <img src={pencilIcon} alt="edit button" />
              <span>Edit</span>
            </div>
          </Link>
        </div>
      </div>
      <DetailsCard emp={userDetails} />
      <PasswordChange handleSubmit={handleSubmit} />
    </div>
  );
};

export default Profile;
