import React, { Component } from 'react';

export class NoteInputForm extends Component {
  render() {
    return (
      <div>
        <div className="field is-grouped">
          <div className="control is-expanded">
            <input className="input is-small" type="text" placeholder="Note title"/>
          </div>
          <div className="control">
            <div className="select is-small">
              <select>
                <option>General</option>
                <option>Specific</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <textarea className="textarea is-small" placeholder="What's on your mind?"></textarea>
          </div>
        </div>
        <input type="button" className="button is-small is-primary" value="Add Note"/>
      </div>
    );
  }
}