import React, {Component} from 'react';
import {PersonDetails, PersonList} from '../sw-components';
import Row from '../row';


export default class PeoplePage extends Component{
    state={
        selectedItem:null
    }

    onItemSelected = (selectedItem)=>{
        this.setState({
            selectedItem
        })
    }

    render(){
        return(
            <Row
            left={<PersonList onItemSelected={this.onItemSelected}/>}
            right={<PersonDetails ItemId = {11}/>}
            />
        )
    }
}
