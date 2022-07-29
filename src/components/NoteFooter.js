import React from 'react';

export default function NoteFooter({ id, onDelete, onArchive, archived }) {
  return (
    <div className='card-footer'>
      <button className='btn-danger' onClick={() => onDelete(id)}>
        Hapus
      </button>
      {!archived ? (
        <button className='btn-second' onClick={() => onArchive(id)}>
          Arsipkan
        </button>
      ) : (
        <button className='btn-second' onClick={() => onArchive(id)}>
          Hapus Arsip
        </button>
      )}
    </div>
  );
}
