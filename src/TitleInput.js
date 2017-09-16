import React, { Component } from 'react';

export class TitleInput extends Component {
  render() {
    return (
      <div className="field">
        <label className="label is-small">Title</label>
        <div className="control">
          <input className="input is-small" type="text" placeholder="Note title"/>
        </div>
      </div>
    );
  }
}