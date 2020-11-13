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


    reversegeocode = (request) => {

        fetch(`https://cors-anywhere.herokuapp.com/https://us-restaurant-menus.p.rapidapi.com/menuitems/search/geo?&lat=${this.state.latitude}&lon=${this.state.longitude}&distance=5000&page=1`,
            {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "14f7101a22msh8f7f029de86fa53p13901bjsn92b266f39a5c",
                    "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com"
                }
            })
            .then(response => {
                console.log(response.json());
            })
            .catch(err => {
                console.error(err);
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
                <input type="text" id="fontarr" placeholder="Location" onClick={this.getLocation} />
                <button id="arrow1" size="5em" style={{ position: "absolute" }}> <ArrowForwardIosIcon /> </button>




            </div>
        )
    }
}

export default Categories
