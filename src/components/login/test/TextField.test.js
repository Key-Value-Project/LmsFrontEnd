/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginTextField from '../TextField';

describe('Check Login TextField', () => {
    test('Rendered', () => {
        const { getByTestId } = render(<LoginTextField />);
        const textField = getByTestId('test-textfield-login');
        expect(textField).toBeTruthy();
    });

    test('Label On TextField Displayed', () => {
        const { getByTestId } = render(<LoginTextField label="User Name" />);
        const textField = getByTestId('test-textfield-login');
        expect(textField.textContent).toContain('User Name');
    });

    test('TextField onChange Trigger', () => {
        const onUserNameChange = jest.fn();
        const { getByTestId } = render(<LoginTextField onUserNameChange={onUserNameChange} />);
        const textField = getByTestId('test-login-input');

        expect(textField).toBeTruthy();
        fireEvent.change(textField, { target: { value: 'test1' } });
        expect(onUserNameChange).toHaveBeenCalled();
        expect(onUserNameChange).toHaveBeenCalledWith('test1');
        expect(textField.value).toBe('test1');
    });

    test('TextField Value Displayed', () => {
        const { getByTestId } = render(<LoginTextField userName="test2" />);
        const textField = getByTestId('test-login-input');
        expect(textField.value).toBe('test2');
    });

    test('snapshot matching', () => {
        const { asFragment } = render(<LoginTextField label="User Name" />);
        expect(asFragment()).toMatchSnapshot();
    });
});
