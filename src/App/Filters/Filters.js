import React from 'react'
import './filters.scss'
import SearchBox from "./SearchBox/SearchBox";
import Checkboxes from "./CheckBoxes/Checkboxes";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHdEnabled: false,
      isOneWayEnabled: false,
      searchQuery: ''
    }
  }

  render() {
    return (<div className="filters">
      <SearchBox onSearchChange={this.onSearchChange}/>
      <Checkboxes onChecked={this.onChecked}/>
    </div>)
  }

  onSearchChange = (val) => {
    this.setState({
      searchQuery: val
    },this.emitValues);
  };

  onChecked = ({isHdEnabled, isOneWayEnabled}) => {
    this.setState({
      isHdEnabled,
      isOneWayEnabled
    }, this.emitValues);
  };

  emitValues(){
    this.props.onChange.call(this, this.state);
  }
}

export default Filters;