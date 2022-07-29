import { Component } from 'react';
import { getInitialData, showFormattedDate } from '../utils/index';
import NavBottom from './NavBottom';
import NavTitle from './NavTitle';
import NoteHeadContent from './NoteHeadContent';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

export default class NoteApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialnote: getInitialData(),
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }
  onAddNoteHandler({ title, body, createdAt }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: Date.now(),
            title,
            body,
            createdAt: showFormattedDate(createdAt),
            archived: false,
          },
        ],
      };
    });
  }
  onDeleteHandler(id) {
    // console.log('im clicked');
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onResetData() {
    this.setState((prevState) => {
      return {
        ...prevState,
        notes: this.state.initialnote,
      };
    });
  }

  onSearchHandler(event) {
    this.onResetData();
    this.setState((prevState) => {
      return {
        ...prevState,
        notes: prevState.notes.filter((item) => {
          return item.title.toLowerCase().includes(event.toLowerCase());
        }),
      };
    });
  }

  onArchiveHandler(id) {
    // eslint-disable-next-line array-callback-return
    this.state.notes.map((item) => {
      if (item.id === id) {
        item.archived = !item.archived;
        this.setState((prevState) => {
          return {
            notes: [...prevState.notes],
            initialnote: [...prevState.initialnote],
          };
        });
      }
    });
  }

  render() {
    return (
      <>
        <NavTitle />
        <NoteInput addNote={this.onAddNoteHandler} />
        <NoteHeadContent
          name='Daftar Catatan'
          onSearch={this.onSearchHandler}
        />
        <NoteList
          notes={this.state.notes.filter((note) => !note.archived)}
          onArchive={this.onArchiveHandler}
          onDelete={this.onDeleteHandler}
        />
        <NoteHeadContent name='Daftar Arsip' onSearch={this.onSearchHandler} />
        <NoteList
          notes={this.state.notes.filter((note) => note.archived)}
          onArchive={this.onArchiveHandler}
          onDelete={this.onDeleteHandler}
        />
        <NavBottom />
      </>
    );
  }
}

// export default function NoteApp() {
//   const notes = getInitialData();
//   return (
//     <>
//       <NavTitle />
//       <NoteInput />
//       <NoteHeadContent name='Daftar Catatan' />
//       <NoteList notes={notes} />
//       <NoteHeadContent name='Daftar Arsip' />
//       <NavBottom />
//     </>
//   );
// }
