/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
import React from 'react';

const Button = ({ text, error }) => {
    const style = {
        background: 'red',
    };

    return (
        <button style={error ? style : { cursor: 'pointer' }} data-testid="test-button-login">
            {text}
        </button>
    );
};

export default Button;
