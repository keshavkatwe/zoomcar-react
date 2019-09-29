import React from 'react'
import './SearchBox.scss';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value}, () => {
      this.props.onSearchChange(this.state.value)
    });
  };

  render() {
    return (
        <div className="input">
          <input
              type="text"
              className="input__control"
              placeholder="Search cities"
              value={this.state.value}
              onChange={this.handleChange}/>
        </div>
    )
  }
}

export default SearchBox;