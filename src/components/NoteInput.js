import { Component } from 'react';

export default class NoteInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      createdAt: Date.now(),
      archived: false,
    };

    this.onTitleHandler = this.onTitleHandler.bind(this);
    this.onBodyHandler = this.onBodyHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  onTitleHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value.slice(0, 50),
      };
    });
  }

  onBodyHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }
  onLimitHandler(event) {
    const inputTitle = event.target.value;
    let tmpTitle = '';

    if (inputTitle.length >= 50) {
      tmpTitle = inputTitle.substring(0, 50);
    } else {
      tmpTitle = inputTitle;
    }
    this.setState(() => {
      return {
        title: tmpTitle,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();

    this.props.addNote(this.state);
  }
  render() {
    return (
      <div className='card-input'>
        <form id='tambah-catatan' onSubmit={this.onSubmitHandler}>
          <label htmlFor=''></label>
          <div className='input-form'>
            <input
              type='text'
              placeholder='Tulis Judul Catatan...'
              value={this.state.title}
              onChange={this.onTitleHandler}
            />
            <span>
              <p className='limit'>
                Sisa Karakter:{50 - this.state.title.length}
              </p>
            </span>
          </div>
          <div className='clear'></div>
          <div className='input-textarea'>
            <textarea
              name=''
              id=''
              placeholder='Tulis isi Catatan...'
              value={this.state.body}
              onChange={this.onBodyHandler}
            ></textarea>
          </div>
          <div className='btn-form'>
            <button className='input-button' type='submit'>
              Buat Catatan
            </button>
          </div>
        </form>
      </div>
    );
  }
}
