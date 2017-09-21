import React, { Component } from 'react';
import { NoteItem } from './NoteItem';

export class NoteList extends Component {

  render() {
    const { index, name, notes, onDeleteNote, onShowNote } = this.props;

    return (
      <div>
        <h2 className="has-text-primary">{name}</h2>
        <hr/>
        <div>
          {notes.length > 0 &&
            notes.map((note, idx) => {
              if (!note.deleted) {
                return <NoteItem
                  key={idx}
                  listIndex={index}
                  index={idx}
                  title={note.title}
                  body={note.body}
                  onDeleteNote={onDeleteNote}
                  onClick={onShowNote}
                />
              }
              return false;
            })
          }
        </div>
      </div>
    );
  }
}