import React from 'react'



class location extends React.Component {

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
            console.log("not available");
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



}

export default location