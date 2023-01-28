import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from './BookingForm';
test('Renders the BookingForm initial time', () => {
  render(<BookingForm />);
  const timeElement = screen.getAllByTestId('currentTime');

  expect(timeElement[0].textContent).toBe('17:00');
});

test('Renders the BookingForm update time', () => {
  render(<BookingForm />);
  const timeElement = screen.getAllByTestId('currentTime');
  const input = screen.getByTestId('currentDate');

  fireEvent.change(input, { target: { value: '2023-01-28' } });

  expect(timeElement[0].textContent).toBe('17:00');

  expect(input.value).toBe('2023-01-28');
});

test('Renders the BookingForm to show error message when all the fields are not entered', async () => {
  render(<BookingForm />);
  const buttonElement = screen.getByRole('button');
  await userEvent.click(buttonElement);
  const alertElement = screen.getByTestId('alert');
  expect(alertElement).toBeInTheDocument();
});

test('Renders the BookingForm should not show any error message when the component is loaded', () => {
  render(<BookingForm />);
  const alertElement = screen.queryByRole('alert');
  expect(alertElement).not.toBeInTheDocument();
});
