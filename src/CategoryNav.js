import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class CategoryNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.props.onSwitch("NoteView", index, false);
  }

  render() {
    const categories = this.props.categoryList;

    return (
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            {categories.map((value, index) => {
              return(
                <li 
                  key={index}
                  onClick={() => this.handleClick(index)}>
                  <Link to={`/${value.urlName}`}>
                    {value.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
    )
  }
}