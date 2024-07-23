/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Check Login Button', () => {
  test('Rendered', () => {
    const { getByTestId } = render(<Button />);
    const button = getByTestId('test-button-login');
    expect(button).toBeTruthy();
  });

  test('Text On Button Displayed', () => {
    const { getByTestId } = render(<Button text="OK" />);
    const button = getByTestId('test-button-login');
    expect(button.textContent).toBe('OK');
  });

  // test("Button onClick Trigger", () => {
  //     const onClick = jest.fn();
  // 	const { getByTestId } = render(<Button onClick={onClick} />);
  // 	const button = getByTestId("test-button-login");
  // 	fireEvent.click(button);
  //     expect(onClick).toHaveBeenCalledTimes(1);
  // });

  test('CSS inline loaded', () => {
    const { getByTestId } = render(<Button error={false} />);
    const button = getByTestId('test-button-login');
    expect(button).toHaveStyle('cursor: pointer');
  });

  test('Snapshot Matching', () => {
    const { asFragment } = render(<Button text="OK" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
