import React from 'react';

interface DatePickerProps {
  date: string;
  setDate: (value: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ date, setDate }) => (
  <input
    name='date'
    type="datetime-local"
    className="form-control"
    value={date}
    onChange={(e) => setDate(e.target.value)}
  />
);

export default DatePicker;
