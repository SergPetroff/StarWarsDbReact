import React from 'react';
import ItemDetails,{Record} from '../item-details';
import {withSwapiService} from '../hoc-helper';

const PlnaetDetails = (props)=>{
    return(
        <ItemDetails {...props}>
        <Record field='model' label='Model'/>
        <Record field='length' label='Length'/>
        <Record field='costInCredits' label='Cost'/>
        </ItemDetails>
    )
         
};

const mapMethodsToProps = (swapiService)=>{
    return {
        getData:swapiService.getPlanet,
        getImageUrl:swapiService.getPlanetImage
    };
};

export default withSwapiService(mapMethodsToProps)(PlnaetDetails);