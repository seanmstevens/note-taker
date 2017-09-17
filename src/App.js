import React, { Component } from 'react';
import { NoteInputForm } from './NoteInputForm';
import { NoteList } from './NoteList';
import '../node_modules/bulma/css/bulma.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [{
        name: "General Notes",
        urlName: "general",
        notes: [{
          title: "Example Note",
          body: "Example text!!!",
          deleted: false
        }, {
          title: "Example Note #2",
          body: "Another note. Whoa!",
          deleted: false
        }]
      }]
    }
  }

  handleAddNote(listIndex, note) {
    const nextList = 'something';
  }

  render() {
    return (
      <div className="container">
        <section className="section">
          <h1 className="title">
            Notify
          </h1>
          <p className="subtitle">
            Start by adding a <strong>note</strong> below!
          </p>
        </section>
        <div className="tile is-ancestor box">
          <div className="tile is-4 is-vertical is-parent">
            <div className="tile is-child">
              {this.state.categories.map((list, index) => {
                return <NoteList
                  index={this.state.index}
                  name={list.name}
                  notes={list.notes}
                />
              })}
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child">
              <NoteInputForm/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
