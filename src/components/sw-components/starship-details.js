import React from 'react';
import ItemDetails,{Record} from '../item-details';
import {SwapiServiceConsumer} from '../swapi-service-context';
import {withSwapiService} from '../hoc-helper';

const StarshipDetails = ({ItemId,swapiService})=>{
    const {getStarship,getStarshipImage} = swapiService;
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

export default withSwapiService(StarshipDetails);