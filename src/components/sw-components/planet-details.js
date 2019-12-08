import React from 'react';
import ItemDetails,{Record} from '../item-details';
import {withSwapiService} from '../hoc-helper';

const PlnaetDetails = ({ItemId, swapiService})=>{
const {getPlanet,getPlanetsImage} = swapiService;
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

export default withSwapiService(PlnaetDetails);