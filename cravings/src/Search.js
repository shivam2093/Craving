import React from "react";
import "./Search.css";
import location from './location'
import Userpage from './components/Userpage'
import App from "./App";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { CgArrowLongRight } from "react-icons/cg";
import $ from "jquery";
import { Link } from "react-router-dom";
import MainpageBanner from "./components/MainpageBanner";
require('dotenv').config();






class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      context: props.context,
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

      navigator.geolocation.getCurrentPosition(this.getCoordinates, null,
        { maximumAge: 10000, timeout: 5000, enableHighAccuracy: false });
    }




    else {
      console.log("Not Available");
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
    var apiKey = process.env.API_KEY;
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&sensor=false&key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        if (this.setState) {
          $("#fontarr").attr("value", data.results[0].formatted_address);

        }

      })

  }

  gotologin() {

    alert("Confirm address and proceed with signIn");

  }




  render() {
    // Destructuring state

    const { userAddress } = this.state

    window.onload = function () {


      document.getElementById("fontarr").click();

    }
    return (

      <div className="Search">
        <div className="food">
          <h1 id="food">Want </h1> <h1 id="word"> </h1>
          <p>Food, Drinks and more available for delivery and Pickup.</p>
        </div>
        <div className="arrows">

          <input type="text" id="fontarr" placeholder="Location" onClick={this.getLocation} />

          <Link to="/">
            <button id="arrow1" size="5em" style={{ position: "absolute" }} onClick={this.gotologin} > <ArrowForwardIosIcon /> </button>
          </Link>
        </div>

      </div>


    );
  }
}



export default Search;
