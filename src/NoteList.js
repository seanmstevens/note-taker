import React, { Component } from 'react';
import { NoteItem } from './NoteItem';
import { AddNote } from './AddNote';

export class NoteList extends Component {
  render() {
    const { index, name, notes } = this.props;

    return (
      <div>
        <h2 className="has-text-primary">{name}</h2>
        <hr/>
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
        <div className="columns is-centered">
          <AddNote/>
        </div>
      </div>
    );
  }
}