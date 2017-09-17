import React, { Component } from 'react';
import { DeleteNote } from './DeleteNote';

export class NoteItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deleteVisible: false
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(e) {
    this.setState({
      deleteVisible: true
    });
  }

  handleMouseLeave(e) {
    this.setState({
      deleteVisible: false
    });
  }

  render() {
    const { listIndex, index, title, body, onDeleteNote } = this.props;

    return (
      <div className="content is-small note-item" 
        onMouseEnter={this.handleMouseEnter} 
        onMouseLeave={this.handleMouseLeave}>
        <h4 className="has-text-grey note-title">{title}</h4>
        <DeleteNote 
          visible={this.state.deleteVisible}
          listIndex={listIndex}
          index={index}
          onClick={onDeleteNote}/>
        <p className="has-text-light-grey">{body}</p>
      </div>
    );
  }
}