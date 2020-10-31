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


        fetch(`https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/collections?&start=0&count=10&lat=${this.state.latitude}&lon=${this.state.longitude}&radius=5000000`,
            {

                method: 'GET',
                headers: {
                    'user-key': localStorage.getItem('zomato-api')
                }

            })
            .then(response => response.json())
            .then(data => console.log(data))

    }

    render() {

        window.onload = function () {


            document.getElementById("fontarr").click();

        }
        return (
            <div>
                <input type="text" id="fontarr" placeholder="Location" onClick={this.getLocation} />
                <button id="arrow1" size="5em" style={{ position: "absolute" }}> <ArrowForwardIosIcon /> </button>

                <div className="widget_wrap" style={{ width: 520, height: 504, display: "inline-block" }}>
                    <iframe src="https://www.zomato.com/widgets/all_collections.php?city_id=11&language_id=1&theme=red&widgetType=large" style={{ position: "relative", width: "100%", height: "100%", border: 0 }}>
                    </iframe>
                </div>


            </div>
        )
    }
}

export default Categories
