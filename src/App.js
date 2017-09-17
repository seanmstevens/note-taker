import React, { Component } from 'react';
import { ViewingPanel } from './ViewingPanel';
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

    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
  }

  handleAddNote(listIndex, title, body) {
    console.log('note added!');

    const nextLists = this.state.categories.map((list, idx) => {
      if (idx !== listIndex) {
        return list;
      }
      return Object.assign({}, list, {
        notes: list.notes.concat({
          title,
          body,
          deleted: false
        })
      });
    });

    this.setState({
      categories: nextLists
    });
  }

  handleDeleteNote(listIndex, index, value) {
    console.log('clicked!');

    this.setState({
      categories: this.state.categories.map((list, idx) => {
        if (idx !== listIndex) {
          return list;
        }
        return Object.assign({}, list, {
          notes: list.notes.map((note, idx) => {
            if (idx !== index) {
              console.log(note);
              return note;
            }

            return Object.assign({}, note, { deleted: true });
          })
        })
      })
    });
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
                  index={index}
                  name={list.name}
                  notes={list.notes}
                  onDeleteNote={this.handleDeleteNote}
                  onAddNote={this.handleAddNote}
                />
              })}
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child">
              <ViewingPanel/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
