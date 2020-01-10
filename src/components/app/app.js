import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import "./app.css";
import SwapiService from "../../services/swapi-servise";
import DummySwapiService from "../../services/dummy-swapi-service";
import ErrorIndicator from "../error-indicator";
import ErrorBoundry from "../errorBoundry";
import { SwapiServiceProvider } from "../swapi-service-context";
import { PeoplePage, PlanetPage, StarshipPage } from "../pages";

import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
  //swapiService = new SwapiService();
  swapiService = new DummySwapiService();
  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {};
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header />

              <RandomPlanet />
              <Route path="/" render={() => <h2>Welcome to StarDB</h2>} exact />
              <Route path="/people" component={PeoplePage} />
              <Route path="/planets" component={PlanetPage} />
              <Route path="/starships" component={StarshipPage} />
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
      /*
        { planet }
        <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div>
      <PeoplePage/>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
              renderItem = {(item)=>item.name}/>
          </div>
          <div className="col-md-6">
            <ItemDetails personId={this.state.selectedPerson} />
          </div>
        </div>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
              renderItem = {(item)=>item.name} 
               />
          </div>
          <div className="col-md-6">
            <ItemDetails personId={this.state.selectedPerson} />
          </div>
        </div> 
      
       
      </div>*/
    );
  }
}
