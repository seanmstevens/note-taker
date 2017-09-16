import React, { Component } from 'react';

export class BodyInput extends Component {
  render() {
    return (
      <div className="field">
        <label className="label is-small">Note Text</label>
        <div className="control">
          <textarea className="textarea is-small" placeholder="What's on your mind?"></textarea>
        </div>
      </div>
    );
  }
}