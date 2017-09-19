import React, { Component } from 'react';

export class CategorySelector extends Component {
  render() {
    const categories = this.props.categoryList;
    return (
      <select onChange={e => this.props.onChange(e)}>
        {categories.map((value, index) => {
          return( 
            <option 
              key={index} 
              value={index}>
              {value.name}
            </option>
          );
        })}
      </select>
    );
  }
}