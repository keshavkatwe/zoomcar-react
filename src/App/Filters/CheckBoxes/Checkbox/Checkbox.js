import React from 'react';
import './Checkbox.scss'

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isChecked: false};
  }

  handleChange = (event) => {
    this.setState({isChecked: event.target.checked});
    this.props.onChange(event.target.checked);
  };

  render() {
    return (
        <div className="checkbox">
          <label>
            {this.props.label}
            <input
                type="checkbox"
                checked={this.state.isChecked}
                onChange={this.handleChange}/>
          </label>
        </div>
    )
  }
}

export default Checkbox;