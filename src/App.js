import React, { Component } from 'react';
import { BodyInput } from './BodyInput';
import { TitleInput } from './TitleInput';
import { NoteList } from './NoteList';
import '../node_modules/bulma/css/bulma.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [{
        name: "General Notes",
        urlName: "general",
        notes: [{
          title: "Example Note",
          body: "Example text!!!"
        }, {
          title: "Example Note #2",
          body: "Another note. Whoa!"
        }]
      }]
    }
  }

  render() {
    return (
      <div className="container">
        <section className="section">
          <h1 className="title">
            Notify
          </h1>
          <p className="subtitle">
            Start by writing a <strong>note</strong> below!
          </p>
        </section>
        <div className="tile is-ancestor box">
          <div className="tile is-4 is-vertical is-parent">
            <div className="tile is-child">
              {this.state.lists.map((list, index) => {
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
              <TitleInput/>
              <BodyInput/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
