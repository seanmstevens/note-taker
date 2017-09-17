import React, { Component } from 'react';
import { NoteInputForm } from './NoteInputForm';

export class ViewingPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentView: <NoteInputForm/>
    };

    this.changeView = this.changeView.bind(this);
  }

  changeView(view) {
    this.setState({
      currentView: <NoteInputForm/>
    });
  }

  render() {
    const view = this.state.currentView;

    return (
      view
    );
  }
}