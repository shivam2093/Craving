import React, { Component } from 'react'
import $, { get } from "jquery";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
export class Categories extends Component {

    constructor(props) {
        super(props)

        this.state = {
            latitude: null,
            longitude: null,
            userAddress: null,
            searchRes: ''

        }
    }

    getLocation = () => {

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(this.getCoordinates, null,
                { maximumAge: 10000, timeout: 5000, enableHighAccuracy: false });
        }
        else {
            console.log("Not Available");
        }
    }



    getCoordinates = (position) => {
        console.log(position.coords.latitude);

        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude

        })

        this.reversegeocode();
    }

    onChange = (event) => {



        this.setState({

            searchRes: event.target.value

        })
    }

    reversegeocode = (request) => {

        const settings = {
            "async": true,
            "crossDomain": true,
            "url": `https://us-restaurant-menus.p.rapidapi.com/restaurants/search?page=1&q=${this.state.searchRes}&lon=${this.state.longitude}&lat=${this.state.latitude}&distance=100`,
            "method": "GET",
            "headers": {

                "x-rapidapi-key": "",
                "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com"
            }
        };
        $.ajax(settings).done(function (response) {
            console.log(response.result);
        });

        /*
                fetch(`https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/collections?&start=0&count=10&lat=${this.state.latitude}&lon=${this.state.longitude}&radius=5000000`,
                    {
        
                        method: 'GET',
                        headers: {
                            'user-key': localStorage.getItem('zomato-api')
                        }
        
                    })
                    .then(response => response.json())
                    .then(data => console.log(data))
        
                    */
    }

    render() {

        window.onload = function () {

            document.getElementById("fontarr").click();

        }

        return (
            <div>
                <input type="text" id="fontarr" placeholder="Location" onChange={this.onChange} />
                <button id="arrow1" size="5em" style={{ position: "absolute" }} onClick={this.getLocation} > <ArrowForwardIosIcon /> </button>

            </div>

        )
    }
}

export default Categories
