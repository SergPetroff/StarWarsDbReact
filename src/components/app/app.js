import React,{Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemDetails,{Record} from '../item-details';
import './app.css';
import SwapiService from '../../services/swapi-servise';
import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../errorBoundry';


import{
  PersonDetails,
  PlnaetDetails,
  StarshipDetails,
  PersonList,
  PlnaetList,
  StarshipList
} from '../sw-components';

export default class App extends Component{

  swapiService = new SwapiService();
  state = {
    showRandomPlanet:true,
    hasError:false
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onPersonSelected = (id)=>{
    this.setState({
      selectedPerson:id
    })
  }
  render(){
    if (this.state.hasError) {
      return <ErrorIndicator />
    }
    const planet = this.state.showRandomPlanet?
    <RandomPlanet/>:null;

    return (

      <ErrorBoundry>
        <div className="stardb-app">
        <Header />

        <PersonDetails ItemId = {11}/>
        <StarshipDetails ItemId = {11}/>
        <PlnaetDetails ItemId = {11}/>
          <PersonList>
            {({name})=><span>{name}</span>}
          </PersonList>
          <StarshipList>
            {({name})=><span>{name}</span>}
          </StarshipList>
          <PlnaetList>
            {({name})=><span>{name}</span>}
          </PlnaetList>
        </div>
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
};

