import React from 'react';
import './City.scss';

function City(props) {
  return (<div className="city-box">
    <div className="content">
      <img className="icon" src={props.icon} alt=""/>
      <h4 className="name">{props.name}</h4>
    </div>
  </div>)
}

export default City;