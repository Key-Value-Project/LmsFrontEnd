/* eslint-disable no-unused-vars */
import React from 'react';
import { forwardRef } from 'react';

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
const TextField = ({ label, name, type, onUserNameChange, userName }, ref) => {
  const onChange = (e) => {
    if (onUserNameChange) {
      onUserNameChange(e.target.value);
    }
  };

  return (
    <span data-testid="test-textfield-login">
      <label htmlFor={label}>{label}</label>
      <input ref={ref} type={type} name={name} value={userName} onChange={onChange} data-testid="test-login-input" />
    </span>
  );
};

const LoginTextField = forwardRef(TextField);
export default LoginTextField;
