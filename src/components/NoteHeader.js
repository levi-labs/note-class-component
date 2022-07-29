import React from 'react';
import { showFormattedDate } from '../utils';

export default function NoteHeader({ title, createdAt }) {
  return (
    <div className='card-head'>
      <h2>{title}</h2>
      <p>{showFormattedDate(createdAt)}</p>
    </div>
  );
}
