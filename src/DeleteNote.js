import React, { Component } from 'react';

export class DeleteNote extends Component {
  render() {
    let opacity = this.props.visible ? { opacity: '1' } : { opacity: '0' };

    return (
      <button className="delete is-small note-delete" style={ opacity }></button>
    );
  }
}