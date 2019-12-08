import React from 'react';
import {withData} from '../hoc-helper';
import SwapiService from '../../services/swapi-servise';
import ItemList from '../item-list';

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService;


const withChildFunction=(Wrapped,fn)=>{
    return(props)=>{
        return(
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}

const renderItem = ({name})=><span>{name}</span>;
const renderStarShipItem = ({name, model})=><span>{name}({model})</span>

const PersonList = withData(withChildFunction(
    ItemList,
    renderItem
),getAllPeople);
const PlnaetList = withData(withChildFunction(
    ItemList,
    renderItem
),getAllPlanets);
const StarshipList = withData(withChildFunction(
    ItemList,
    renderStarShipItem
),getAllStarships);

export{
    PersonList,
    PlnaetList,
    StarshipList
}