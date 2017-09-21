import React, { Component } from 'react';
import { ViewingPanel } from './ViewingPanel';
import { NoteList } from './NoteList';
import { AddNote } from './AddNote';
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
      }, {
        name: "LC101 Lecture Notes",
        urlName: "lc101",
        notes: []
      }],
      currentView: "NoteView",
      currentNote: {
        title: "Example Note",
        body: "Meow meow instantly break out into full speed gallop across the house for no reason.",
        category: "General Notes"
      }
    };

    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.handleAddNoteInfo = this.handleAddNoteInfo.bind(this)
    this.handleChangeView = this.handleChangeView.bind(this);
  }

  handleAddNoteInfo(listIndex, title, body) {
    const nextLists = this.state.categories.map((list, idx) => {
      if (idx !== listIndex) {
        return list;
      }
      return Object.assign({}, list, {
        notes: list.notes.concat({
          title: title,
          body: body,
          deleted: false
        })
      });
    });

    this.setState({
      categories: nextLists
    });
  }

  handleDeleteNote(listIndex, index, value) {
    this.setState({
      categories: this.state.categories.map((list, idx) => {
        if (idx !== listIndex) {
          return list;
        }
        return Object.assign({}, list, {
          notes: list.notes.map((note, idx) => {
            if (idx !== index) {
              return note;
            }
            return Object.assign({}, note, { deleted: true });
          })
        })
      })
    });
  }

  handleChangeView(view, title, body, listIndex) {
    title = title || "";
    body = body || "";
    listIndex = listIndex || 0;

    this.setState({
      categories: Array.from(
        this.state.categories
      ),
      currentView: view,
      currentNote: {
        title: title,
        body: body,
        category: this.state.categories[listIndex].name
      }
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
                  key={index}
                  index={index}
                  name={list.name}
                  notes={list.notes}
                  onDeleteNote={this.handleDeleteNote}
                  onShowNote={this.handleChangeView}
                />
              })}
              <div className="columns is-centered is-marginless">
                <AddNote
                  onShowForm={this.handleChangeView}/>
              </div>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child">
              <ViewingPanel
                categoryList={this.state.categories}
                onSubmit={this.handleAddNoteInfo}
                currentView={this.state.currentView}
                noteTitle={this.state.currentNote.title}
                noteBody={this.state.currentNote.body}
                noteCategory={this.state.currentNote.category}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
