import React, { Component } from 'react';
import PlusCircleOutlineIcon from 'mdi-react/PlusCircleOutlineIcon';

export class AddNote extends Component {
  render() {
    return (
      <div className="clickable">
        <span>Add a new note
          <span className="icon add-note-button">
            <PlusCircleOutlineIcon/>
          </span>
        </span>
      </div>
    );
  }
}