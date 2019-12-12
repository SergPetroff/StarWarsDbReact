import React from 'react';
import {withData, withSwapiService,compose  } from '../hoc-helper';
import ItemList from '../item-list';


const withChildFunction=(fn)=>(Wrapped)=>{
    return(props)=>{
        return(
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}

const renderItem = ({name})=><span>{name}</span>;

const mapPersonMethodsToProps = (swapiService) => {
    return {
      getData: swapiService.getAllPeople
    };
  };
  
  const mapPlanetMethodsToProps = (swapiService) => {
    return {
      getData: swapiService.getAllPlanets
    };
  };
  
  const mapStarshipMethodsToProps = (swapiService) => {
    return {
      getData: swapiService.getAllStarships
    };
  };

  
  const PersonList = compose(
                          withSwapiService(mapPersonMethodsToProps),
                          withData,
                          withChildFunction(renderItem)
                    )(ItemList);



const PlanetList =  compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderItem)
)(ItemList);

const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData,
  withChildFunction(renderItem)
)(ItemList);

export{
    PersonList,
    PlanetList,
    StarshipList
}