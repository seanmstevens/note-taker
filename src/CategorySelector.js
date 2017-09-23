import React, { Component } from 'react';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import PlusCircleOutlineIcon from 'mdi-react/PlusCircleOutlineIcon';

export class CategorySelector extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.categoryList[this.props.currentIndex].name);

    this.state = {
      dropdownActive: false,
      currentCategory: this.props.categoryList[this.props.currentIndex].name
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // Handling display stuff (current value of dropdown, whether dropdown is shown)
    if (this.state.dropdownActive) {
      this.setState({
        dropdownActive: false,
        currentCategory: e.target.textContent
      });
    } else {
      this.setState({
        dropdownActive: true,
        currentCategory: this.state.currentCategory
      });
    }
    // Handling category switches
    if (e.target.tagName === "DIV") {
      this.props.onChange(e);
    }
  }

  render() {
    const categories = this.props.categoryList;
    
    return (
      <div 
        className={"dropdown is-right " + (this.state.dropdownActive ? "is-active" : "")}>
        <div className="dropdown-trigger">
          <button 
            className="button" 
            aria-haspopup="true" 
            aria-controls="dropdown-menu" 
            onClickCapture={e => this.handleClick(e)}>
            <span>{this.state.currentCategory}</span>
            <span className="icon is-small">
              <ChevronDownIcon className="smaller"/>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            {categories.map((value, index) => {
              return(
                <div
                  key={index}
                  id={index}
                  className="dropdown-item clickable" 
                  onClickCapture={e => this.handleClick(e)}>
                  {value.name}
                </div>
              );
            })}
            <hr className="dropdown-divider"/>
            <div className="dropdown-item clickable">
              <span className="is-size-6 has-text-weight-semibold">New category
                <span className="icon add-note-button">
                  <PlusCircleOutlineIcon/>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      // <select onChange={e => this.props.onChange(e)}>
      //   {categories.map((value, index) => {
      //     return( 
      //       <option 
      //         key={index} 
      //         value={index}>
      //         {value.name}
      //       </option>
      //     );
      //   })}
      // </select>
    );
  }
}