import React from 'react';
import './CitiesList.scss'
import City from "./City/City";

class CitiesList extends React.Component {

  render() {
    const list = this.props.cities.map((city) => {
      if (!city.icon) {
        city.icon = 'https://s3-ap-southeast-1.amazonaws.com/zoomcar/photos/original/f00bd521d24e52b5ca9a2a3b8bb2ebf49df9e933.png?1497538418';
      }
      const {id, icon, name} = city;
      return <City
          icon={icon}
          name={name}
          key={id}/>
    });

    if (this.props.cities.length > 0) {
      return (<div className="cities">
        <h4 className="cities-title">{this.props.title}</h4>
        <div className="cities-list">
          {list}
        </div>
      </div>)
    }
  }
}

export default CitiesList;