import React, { Component } from 'react';
import { NoteItem } from './NoteItem';
import { AddNote } from './AddNote';

export class NoteList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noteToAdd: ''
    };

  }

  render() {
    const { index, name, notes, onDeleteNote } = this.props;

    return (
      <div>
        <h2 className="has-text-primary">{name}</h2>
        <hr/>
        <div>
          {notes.map((note, idx) => {
            if (!note.deleted) {
              return <NoteItem
                key={idx}
                listIndex={index}
                index={idx}
                title={note.title}
                body={note.body}
                onDeleteNote={onDeleteNote}
              />
            }
            return false;
          })}
        </div>
        <div className="columns is-centered is-marginless">
          <AddNote/>
        </div>
      </div>
    );
  }
}