import React, { Component } from 'react';
import { NoteItem } from './NoteItem';

export class NoteList extends Component {
  render() {
    const { index, name, notes } = this.props;

    return (
      <div>
      <h3>{name}</h3>
        <div>
          {notes.map((note, idx) => {
            return <NoteItem
              key={idx}
              listIndex={index}
              index={idx}
              title={note.title}
              body={note.body}/>
          })}
        </div>
      </div>
    );
  }
}