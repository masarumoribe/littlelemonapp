import { render, screen } from '@testing-library/react';
import BookingForm from '../Components/BookingForm';

test('Renders the BookingForm choose date label', () => {

  render(<BookingForm availableTimes={[]}/>);
  const label = screen.getByText(/Choose Date/i);
  expect(label).toBeInTheDocument();

});