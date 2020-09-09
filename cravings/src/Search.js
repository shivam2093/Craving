import React from "react";
import "./Search.css";
import location from './location'
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      latitude: null,
      longitude: null,
      userAddress: null
    };

    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.reversegeocode = this.reversegeocode.bind(this);

  }

  getLocation() {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    }

    else {
      console.log("not Available");
    }
  }

  getCoordinates(position) {
    console.log(position.coords.latitude);

    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude

    })

    this.reversegeocode();

  }

  reversegeocode() {

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&sensor=false&key=AIzaSyBwkDQjGoyB3s2DxdIAdax0_pWeeMFNN1o`)
      .then(response => response.json())
      .then(data => this.setState({
        userAddress: data.results[0].formatted_address
      }))
  }



  render() {

    return (
      <Router>
        <div className="Search">
          <div className="food">
            <h1 id="food">Looking For </h1> <h1 id="word"> </h1>
            <p>Food, Drinks and more available for delivery and Pickup.</p>
          </div>
          <div className="btnandtext">

            <input type="text" className="fontarr" placeholder="Location" value={this.state.userAddress}></input>
            <Switch>

              <input type="submit" placeholder="Search" value="search" onClick={this.getLocation}></input>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }


}


export default Search;
