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

const PersonList = withData(ItemList,getAllPeople);
const PlnaetList = withData(ItemList,getAllPlanets);
const StarshipList = withData(ItemList,getAllStarships);

export{
    PersonList,
    PlnaetList,
    StarshipList
}