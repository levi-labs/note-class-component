import React from 'react';

export default function NoteHeadContent({ name, onSearch }) {
  return (
    <>
      <div className='head-content'>
        <h4 id='daftar-catatan'>{name}</h4>
        <input
          className='search'
          type='text'
          placeholder='Cari Catatan...'
          onChange={(event) => onSearch(event.target.value)}
        />
      </div>
      <hr />
    </>
  );
}
