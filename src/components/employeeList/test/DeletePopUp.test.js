import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import DeletePopUp from '../DeletePopUp';

describe('DeletePopUp Component Tests', () => {
    const mockHandleClose = jest.fn();
    const mockHandleDelete = jest.fn();

    test("Component not rendered when 'open' prop is false", () => {
        const { queryByTestId } = render(<DeletePopUp open={false} handleClose={mockHandleClose} handleDelete={mockHandleDelete} />);
        const popup = queryByTestId('delete-popup');
        expect(popup).toBeNull();
    });

    test("Component rendered when 'open' prop is true", () => {
        const { getByTestId } = render(<DeletePopUp open={true} handleClose={mockHandleClose} handleDelete={mockHandleDelete} />);
        const popup = getByTestId('delete-popup');
        expect(popup).toBeTruthy();
    });

    test("Clicking 'Yes' button calls handleDelete function", () => {
        const { getByText } = render(<DeletePopUp open={true} handleClose={mockHandleClose} handleDelete={mockHandleDelete} />);
        fireEvent.click(getByText('Yes'));
        expect(mockHandleDelete).toHaveBeenCalledTimes(1);
    });

    test("Clicking 'No' button calls handleClose function", () => {
        const { getByText } = render(<DeletePopUp open={true} handleClose={mockHandleClose} handleDelete={mockHandleDelete} />);
        fireEvent.click(getByText('No'));
        expect(mockHandleClose).toHaveBeenCalledTimes(1);
    });

    test('Snapshot', () => {
        const { asFragment } = render(<DeletePopUp open={true} handleClose={mockHandleClose} handleDelete={mockHandleDelete} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
