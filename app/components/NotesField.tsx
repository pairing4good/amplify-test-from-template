import React from 'react';

interface NotesFieldProps {
  notes: string;
  setNotes: (value: string) => void;
}

const NotesField: React.FC<NotesFieldProps> = ({ notes, setNotes }) => (
  <textarea
    name='note'
    className="form-control notes"
    value={notes}
    onChange={(e) => setNotes(e.target.value)}
    rows={5}
    placeholder="Type your notes here..."
  />
);

export default NotesField;
