//jshint esversion:6
import React, {Component} from 'react';
import CardSmall from "./components/cardList.js";
//Import JSON file here
import data from './db.json';

//The main component containing a mapping function that creates a CardSmall component for each entry in the db.json file

class RestaurantAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: data};
  }

  wildCards=()=>{
    var newArray = [];

    for (var i = 5; i > 0 ; i--){
      var random = Math.floor((Math.random() * (this.state.restaurants.length)) + 1);
      newArray.push(this.state.restaurants[random]);
    }

    this.printContent(newArray);

  }

  printContent() {
    var printedArray = [];

    this.state.restaurants.map((source) => {
    printedArray.push(<CardSmall source={source} key={source.id}/>)
    })

    return (printedArray);
  }

  render() {
    return (
      <div className = "RestaurantAPI">
        <div>
          <button onClick={this.wildCards}>Show suggestions</button>
          {this.printContent()}
        </div>
      </div>
    );
  }
}

export default RestaurantAPI;
