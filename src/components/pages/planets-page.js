import React,{Component} from 'react';
import Row from '../row';
import{
    PlnaetDetails,
    PlanetList
  } from '../sw-components';

  export default class PlanetPage extends Component{
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
            left={<PlanetList onItemSelected={this.onItemSelected}/>}
            right={<PlnaetDetails ItemId = {11}/>}
            />
        )
    }
  }