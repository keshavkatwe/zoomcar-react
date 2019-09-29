import React from 'react';
import './App.scss';
import Filters from "./Filters/Filters";
import service from "../Services/service";
import CitiesList from "./CitiesList/CitiesList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHdEnabled: false,
      isOneWayEnabled: false,
      searchQuery: '',
      cities: [],
      isLoading: true
    }
  }

  render() {

    let container;
    if (this.state.isLoading){
      container = <h4 className="loading__cities">Loading cities...</h4>;
    }
    else if (this.filteredCities.length > 0) {
      container = <div>
        <CitiesList title="Popular"
                    cities={this.popularCities}/>
        <CitiesList title="Other"
                    cities={this.otherCities}/>
      </div>
    }
    else {
      container = <h4 className="no__cities">No cities found</h4>
    }

    return (
        <div className="app">
          <header className="header">
            <h1>CITIES</h1>
          </header>
          <Filters onChange={this.filtersChanged}/>
          {container}
        </div>
    )
  }

  get filteredCities() {
    const cities = [];
    for (let i = 0; i < this.state.cities.length; i++) {
      const {name, hd_enabled, one_way_enabled} = this.state.cities[i];
      if (this.state.isHdEnabled && !hd_enabled) {
        continue;
      }
      if (this.state.isOneWayEnabled && !one_way_enabled) {
        continue;
      }
      if (this.state.searchQuery.length > 0
          && !name.toLowerCase().includes(
              this.state.searchQuery.toLowerCase())) {
        continue;
      }

      cities.push(this.state.cities[i]);
    }
    return cities;
  }

  get popularCities() {
    return this.filteredCities.filter(city => !!city.popular);
  }
  get otherCities() {
    return this.filteredCities.filter(city => !city.popular);
  }

  componentDidMount() {
    this.setState({isLoading: true});
    service.getCities().then(res => {
      this.setState({
        cities: res.cities
      })
    }).finally(() => this.setState({isLoading: false}));
  }

  filtersChanged = ({
    isHdEnabled,
    isOneWayEnabled,
    searchQuery
  }) => {
    this.setState({
      isHdEnabled,
      isOneWayEnabled,
      searchQuery
    })
  }
}

export default App;
