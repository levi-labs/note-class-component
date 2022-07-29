import React from 'react';
import NoteItem from './NoteItem';

export default function NoteList({ notes, onDelete, onArchive }) {
  return (
    <>
      <div className='row'>
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              onArchive={onArchive}
              {...note}
            />
          ))
        ) : (
          <h3 width='300'>Catatan tidak ditemukan...!</h3>
        )}
      </div>
    </>
  );
}
