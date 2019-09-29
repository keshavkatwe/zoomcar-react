import React from 'react';
import './Checkboxes.scss'
import Checkbox from "./Checkbox/Checkbox";

class Checkboxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHdEnabled: false,
      isOneWayEnabled: false
    }
  }

  updateState = (type, val) => {
    this.setState({[type]: val}, () => {
      this.props.onChecked(this.state)
    });
  };

  render() {
    return (<div className="checkboxes">
      <Checkbox
          label="HD ENABLED"
          onChange={(val) => this.updateState('isHdEnabled', val)}/>
      <Checkbox
          label="ONE WAY ENABLED"
          onChange={(val) => this.updateState('isOneWayEnabled', val)}/>
    </div>)
  }
}

export default Checkboxes;