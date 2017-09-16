import React, { Component } from 'react';

export class NoteItem extends Component {
  render() {
    const title = this.props.title;
    const body = this.props.body;

    return (
      <div className="content is-small box">
        <h4 className="has-text-grey">{title}</h4>
        <p className="has-text-light-grey">{body}</p>
      </div>
    );
  }
}