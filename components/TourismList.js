import React, { Component } from "react";
import { ScrollView} from "react-native";
import axios from 'axios'
import TourismDetail from './TourismDetail'


class TourismList extends Component {
    constructor(props){
        super(props);
        this.state = { tourisms: [] };
    }
    componentDidMount(){
        axios.get('https://www.travel.taipei/open-api/zh-tw/Attractions/All?page=1').then(
            response => this.setState({tourisms : response.data.data})
        ).catch((err)=>console.log(err));
    }
    renderTourismTitle(){
        console.log('in renderTourismTitle');
        return this.state.tourisms.map(tourism => <TourismDetail key={tourism.id} tourism={tourism}/>);
    }

   render(){
    console.log('in render');
    this.renderTourismTitle();
    return (
        <ScrollView>
            {this.renderTourismTitle()}
        </ScrollView>
    );
   }
}

export default TourismList;