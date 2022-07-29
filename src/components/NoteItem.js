import NoteBody from './NoteBody';
import NoteFooter from './NoteFooter';
import NoteHeader from './NoteHeader';

export default function NoteItem({
  title,
  body,
  id,
  onDelete,
  createdAt,
  onArchive,
  archived,
}) {
  return (
    <div className='list-note'>
      <div className='card-note'>
        <NoteHeader title={title} createdAt={createdAt} />
        <NoteBody body={body} archived={archived} />
        <NoteFooter
          id={id}
          onDelete={onDelete}
          onArchive={onArchive}
          archived={archived}
        />
      </div>
    </div>
  );
}
