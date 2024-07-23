import React from 'react';

export const Status = ({ status }) => {
    const statusColor = () => {
        switch (status) {
            case 'Active':
                return '#c6f5b0';
            case 'In Active':
                return '#f2bdc1';
            case 'On Leave':
                return '#f5eba9';
            default:
                return '#f5f5f5';
        }
    };

    const statusStyle = {
        width: '50%',
        minWidth: 'fit-content',
        backgroundColor: statusColor(),
        borderRadius: '15px',
        padding: '5px 15px',
        cursor: 'pointer',
        textAlign: 'center',
    };

    return (
        <p style={statusStyle} data-testid="test-status">
            {status}
        </p>
    );
};
