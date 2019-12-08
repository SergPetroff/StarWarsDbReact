import React from 'react';
import ItemDetails,{Record} from '../item-details';
import {withSwapiService} from '../hoc-helper';


const PersonDetails = ({ItemId, swapiService})=>{
    const {getPerson,getPersonImage} = swapiService;
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

export default withSwapiService(PersonDetails);