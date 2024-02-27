import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from '../Components/BookingForm';
import { MemoryRouter } from 'react-router-dom';

const setup = () => {
  const utils = render(
    <MemoryRouter>
      <BookingForm availableTimes={[]} submitForm={(e) => {}}/>
    </MemoryRouter>)
  const input = screen.getByLabelText("Name");
  return {
    input,
    ...utils
  }
}

test('Renders the BookingForm choose date input with required attribute', () => {

  render(<BookingForm availableTimes={[]}/>);
  const label = screen.getByLabelText(/Choose Date/i);
  expect(label).toHaveAttribute("required")

});

test('Renders the BookingForm choose time input with required attribute', () => {

  render(<BookingForm availableTimes={[]}/>);
  const label = screen.getByLabelText(/Choose Time/i);
  expect(label).toHaveAttribute("required")

});

test('Renders the BookingForm choose guests input with required attributes', () => {

  render(<BookingForm availableTimes={[]}/>);
  const label = screen.getByLabelText(/Number of Guests/i);
  expect(label).toHaveAttribute("required")
  expect(label).toHaveAttribute("min")
  expect(label).toHaveAttribute("max")

});

test('Renders the BookingForm name input with required attribute', () => {

  render(<BookingForm availableTimes={[]}/>);
  const label = screen.getByLabelText(/Name/i);
  expect(label).toHaveAttribute("required")

});

test('Renders the BookingForm email input with required attribute', () => {

  render(<BookingForm availableTimes={[]}/>);
  const label = screen.getByLabelText(/Email/i);
  expect(label).toHaveAttribute("required")

});

test('Invalid input should show error message', () => {

  const {input} = setup()
  const submitBttn = screen.getByTestId("submitBttn")
  fireEvent.change(input, {target: {value: ""}})
  fireEvent.click(submitBttn)
  const errorSpan = screen.getByText(/Your name sould be longer than 1 character/i)
  console.log(errorSpan)
  expect(errorSpan).toBeInTheDocument()
})

test('Valid input should not show error message', () => {

  const {input} = setup()
  const submitBttn = screen.getByTestId("submitBttn")
  fireEvent.change(input, {target: {value: "Masa"}})
  fireEvent.click(submitBttn)
  const errorSpan = screen.queryByText(/Your name sould be longer than 1 character/i)
  console.log(errorSpan)
  expect(errorSpan).toBeInTheDocument()
})