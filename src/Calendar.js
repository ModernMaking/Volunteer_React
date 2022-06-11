import React from 'react';
import { createRoot } from 'react-dom/client';
import 'react-calendar/dist/Calendar.css';

import {
  DatePicker,
  DatePickerProvider,
  useDatePickGetter,
  useDatePickReset,
} from '@bcad1591/react-date-picker';

//const container = document.getElementById('root');
//const root = createRoot(container);

const resetFunc = useDatePickReset();

function Calendar() {
  const { pickedDates } = useDatePickGetter();

  const resetFunc = useDatePickReset();

  return (
    <div>
      <DatePicker disablePreviousDays/>
      <hr />
      <div>{pickedDates.firstPickedDate?.toString()}</div>
      <div>{pickedDates.secondPickedDate?.toString()}</div>
      <button type="button" onClick={resetFunc}>
        Reset
      </button>

    </div>
  );
}

