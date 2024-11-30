import React from 'react';

interface RecordButtonProps {
}

const RecordButton: React.FC<RecordButtonProps> = () => (
  <button type="submit" className="btn btn-primary">
    Record
  </button>
);

export default RecordButton;
