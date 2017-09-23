import React, { Component } from 'react';

export class CategoryNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "general"
    };
  }

  render() {
    const categories = this.props.categoryList;

    return (
      <nav className="breadcrumb is-medium" aria-label="breadcrumbs">
        <ul>
          {categories.map((value, index) => {
            return(
              <li key={index}><a href={value.urlName}>{value.name}</a></li>
            );
          })}
        </ul>
      </nav>
    )
  }
}