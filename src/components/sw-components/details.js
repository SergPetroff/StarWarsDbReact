import React from 'react';
import ItemDetails,{Record} from '../item-details';
import SwapiService from '../../services/swapi-servise';

const swapiService = new SwapiService();


const{
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetsImage,
    getStarshipImage
} = swapiService;


const PersonDetails = ({ItemId})=>{
    return(
        <ItemDetails itemId={ItemId}
        getData={getPerson}
        getImageUrl={getPersonImage}
      >
        <Record field='gender' label='Gender'/>
        <Record field='eyeColor' label='Eye Color'/>
      </ItemDetails>
    )
};
const PlnaetDetails = ({ItemId})=>{
    return(
        <ItemDetails 
        itemId={ItemId}
        getData={getPlanet}
        getImageUrl={getPlanetsImage}
        >
          <Record field='model' label='Model'/>
          <Record field='length' label='Length'/>
          <Record field='costInCredits' label='Cost'/>
          </ItemDetails>
    )
};
const StarshipDetails = ({ItemId})=>{
    return(
        <ItemDetails 
        itemId={ItemId}
        getData={getStarship}
        getImageUrl={getStarshipImage}
        >
          <Record field='model' label='Model'/>
          <Record field='length' label='Length'/>
          <Record field='costInCredits' label='Cost'/>
          </ItemDetails>
    )
};

export{
    PersonDetails,
    PlnaetDetails,
    StarshipDetails
}