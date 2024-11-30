'use client';

import { useState } from 'react';
import DatePicker from './components/DatePicker';
import ButtonGrid from './components/ButtonGrid';
import NotesField from './components/NotesField';
import RecordButton from './components/RecordButton';

export default function HomePage() {
  const localDateTime = () => {
    const now = new Date();

        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');

        return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  const numberOfButtons = 30;
  const [counts, setCounts] = useState<number[]>(Array(numberOfButtons).fill(0));
  const [date, setDate] = useState<string>(localDateTime());
  const [notes, setNotes] = useState<string>('');

  const handleIncrement = (index: number) => {
    setCounts((prev) => {
      const newCounts = [...prev];
      newCounts[index]++;
      return newCounts;
    });
  };

  const handleDecrement = (index: number) => {
    setCounts((prev) => {
      const newCounts = [...prev];
      if (newCounts[index] > 0) newCounts[index]--;
      return newCounts;
    });
  };

  const handleReset = () => {
    setCounts(Array(numberOfButtons).fill(0));
    setNotes('');
    setDate(localDateTime());
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Capture form data
    const form = event.currentTarget;
    const data = new FormData(form);
    const entries = Object.fromEntries(data.entries());

    //alert(`Submitted Data:\n${JSON.stringify(entries, null, 2)}`);
    handleReset();
  };

  return (
    <div className="container grid-container">
      <form id="dataForm" onSubmit={handleSubmit}>
        <div className="row g-2">
        <DatePicker date={date} setDate={setDate} />
        <ButtonGrid counts={counts} onIncrement={handleIncrement} onDecrement={handleDecrement} />
        <NotesField notes={notes} setNotes={setNotes} />
        <RecordButton />
        </div>
      </form>
    </div>
  );
}
