import { fireEvent, render, renderHook, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Main, { updateTimes, initializeTimes} from '../Components/Main';


test('initializeTimes returns the correct initial value', () => {
  render(
    <MemoryRouter>
      <Main />
    </MemoryRouter>
  )

  const reserveTable = screen.getByText(/reserve a table/i);

  fireEvent.click(reserveTable);

  const selectTimeInput = screen.getByLabelText(/choose time/i)

  expect(selectTimeInput.value).toEqual("17:00");

});

test('updateTimes returns same value as state', () => {

  const initialState = {
    date: '',
    times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
  };

  const action = { type: 'CHANGE_DATE', e: '2024-02-10' };

  let updatedState;

  act(() => {
    updatedState = updateTimes(initialState, action);
  });

  expect(updatedState.date).toBe('2024-02-10');
});

