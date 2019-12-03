import React, { Component } from 'react';

import './person-details.css';
import SwapiService from '../../services/swapi-servise';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

export default class PersonDetails extends Component {

  swapiService = new SwapiService();
  state={
    person:null,
    loading:true,
    error:false
  };

  componentDidMount(){
    this.updatePerson();
  };


  componentDidUpdate(prevProps){
    if(this.props.personId!== prevProps.personId){
      this.updatePerson();
    }
  }
  updatePerson(){
    const {personId} = this.props;
    if(!personId){
      return;
    }
    this.swapiService.getPerson(personId)
    .then((person)=>{
      this.setState({
        person,
        loading:false
      });
    })
    .catch(this.onError);
  };

  onError=()=>{
    this.setState({
      error:true,
      loading:false
    });
   };
  render() {

    if(!this.state.person){
      return <span>Select a person from a list</span>;
    }
    
    const {
      id,name,gender,birthYear,eyeColor} = this.state.person;
    const {loading,person} = this.state;
    //const spinner = loading?<Spinner/>:null;
    console.log(loading,person)
    const personview = !loading?<PersonView person = {person}/>:<Spinner/>;
    return (
      <div className="person-details card">
      {personview}
      </div>
    )
  }
}


const PersonView=({person})=>{
  const {id,name,gender,birthYear,eyeColor} = person;
  return (
    
       <React.Fragment>
      <img className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt="character" />

      <div className="card-body">
      <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">{eyeColor}</span>
            <span>red</span>
          </li>
        </ul>
        <ErrorButton/>
      </div>
      </React.Fragment>
  )
}