import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import FilterBar from '../filterBar';

describe('FilterBar Component Tests', () => {
    const mockSetFilter = jest.fn();

    beforeEach(() => {
        mockSetFilter.mockClear();
    });

    test('Renders correctly', () => {
        const { getByText } = render(<FilterBar setFilter={mockSetFilter} />);
        expect(getByText('Filter By')).toBeInTheDocument();
    });

    //     test("Selecting a filter option calls setFilter with correct value", () => {
    //         const { getByText, getByRole } = render(<FilterBar setFilter={mockSetFilter} />);
    //         fireEvent.mouseDown(getByRole("button"));
    //         fireEvent.click(getByText("Active"));
    //         expect(mockSetFilter).toHaveBeenCalledWith("Active");
    //     });

    //     test("Clicking on down-arrow image opens select options", () => {
    //         const { getByAltText, getByRole } = render(<FilterBar setFilter={mockSetFilter} />);
    //         fireEvent.click(getByAltText("down-arrow"));
    //         expect(getByRole("listbox")).toBeInTheDocument();
    //     });

    //     test("Snapshot", () => {
    //         const { asFragment } = render(<FilterBar setFilter={mockSetFilter} />);
    //         expect(asFragment()).toMatchSnapshot();
    //     });
});
