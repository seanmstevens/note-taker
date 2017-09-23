import React, { Component } from 'react';
import { CategorySelector } from './CategorySelector';

export class NoteInputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listIndex: 0,
      noteToAdd: {
        title: '',
        body: ''
      }
    };

    this.changeTitle = this.changeTitle.bind(this);
    this.changeBody = this.changeBody.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.handleNoteSubmit = this.handleNoteSubmit.bind(this);
  }

  handleNoteSubmit() {
    this.props.onSubmit(
      this.state.listIndex,
      this.state.noteToAdd.title,
      this.state.noteToAdd.body
    );
  }

  changeTitle(e) {
    const value = e.target.value;
    const newState = Object.assign(
      {}, 
      this.state.noteToAdd, 
      {title: value}
    );
    this.setState({
      noteToAdd: newState
    });
  }

  changeBody(e) {
    const value = e.target.value;
    const newState = Object.assign(
      {}, 
      this.state.noteToAdd, 
      {body: value}
    );
    this.setState({
      noteToAdd: newState
    });
  }

  changeCategory(e) {
    const index = Number(e.target.id);
    this.setState({
      listIndex: index
    });
  }

  render() {
    return (
      <div>
        <div className="field is-grouped">
          <div className="control is-expanded">
            <input 
              className="input" 
              type="text"
              placeholder="Note title"
              onChange={e => this.changeTitle(e)}
            />
          </div>
          <div className="control">
            <CategorySelector 
              categoryList={this.props.categoryList}
              onChange={this.changeCategory}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <textarea 
              className="textarea is-small" 
              placeholder="What's on your mind?"
              onChange={e => this.changeBody(e)}></textarea>
          </div>
        </div>
        <input 
          type="button" 
          className="button is-small is-primary" 
          value="Add Note"
          onClick={this.handleNoteSubmit}
        />
      </div>
    );
  }
}