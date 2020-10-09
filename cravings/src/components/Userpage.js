
import './Userpage.css'
import $ from "jquery"
import Button from '@material-ui/core/Button';



import React, { Component } from 'react'

class Userpage extends Component {


    constructor(props) {
        super(props)

        this.state = {

            cuisine: '',
            nearByRestaurant: [],
            operation: 'Search'

        };


    }

    onChange = (event) => {

        this.setState({

            cuisine: event.target.value
        })

    }

    callPhone = (event) => {



    }

    search = (event) => {
        var $this = this;

        $this.setState({
            operation: 'Fetching Location..'
        })

        navigator.geolocation.getCurrentPosition(function (position) {



            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            var apiKey = '37fed9b8da069cbe18c3774e6b4b9cbf'
            /*var url = 'https://cors-anywhere.herokuapp.com/http://developers.zomato.com/api/v2.1/search?start=0&count=10&lat=' + lat + '&lon=' + lng +
                '& radius=5000000 & cuisines=' + $this.state.cuisine;*/

            $.ajax({

                url: 'https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?start=0&count=10&lat=' + lat + '&lon=' + lng +
                    '&radius=5000000&cuisines=' + $this.state.cuisine,
                type: 'GET',
                beforeSend: function (request) {

                    request.setRequestHeader('user-key', localStorage.getItem('zomato-api'));
                },
                success: function (result) {

                    console.log(result);

                    $this.setState({
                        nearByRestaurant: result.restaurants,
                        operation: 'Search'
                    })

                }
            })


        })


    }



    render() {
        return (
            <div className="user_home">

                <img src={window.location.origin + '/img/Cravings.png'} alt="html5" className="img_style"></img>

                <div className="food_and_location">
                    <div className="location">
                        <h2 >
                            <span id="font_name">Delivery</span> &nbsp;
                    </h2>
                        <hr />

                        <input type="text" id="inputlocation" placeholder="location" />
                    </div>
                </div>



                <div className="foodsection">
                    <hr />
                    <h1> Food </h1>
                    <div className="searchplace">
                        <input type="text" placeholder="Cravings" alue={this.state.cuisine} style={{ width: 300 }} onChange={this.onChange} />

                        <input type="button" value={this.state.operation} onClick={this.search} />

                    </div>
                    <div>
                        {
                            this.state.nearByRestaurant.map(function (restaurantObj, index) {
                                var item = restaurantObj.restaurant;

                                return (
                                    <div className="gb" key={index}>

                                        <div>
                                            <img src={item.thumb} />
                                        </div>
                                        <div className="sx">

                                            <h3>{item.name}</h3>
                                            <b> Address: </b> {item.location.address}<br />
                                            <b> Cuisine </b> {item.cuisines} <br />
                                            <b> Price: </b> {item.currency} {item.average_cost_for_two} <br />
                                            <b> Ratings: <span style={{ color: '#' + item.user_rating.rating_color }}>
                                                {item.user_rating.aggregate_rating} </span> </b>
                                            <b> <span className="allinOne">
                                                <Button variant="outlined" color="primary" onClick={this.callPhone}> CALL</Button></span> </b>
                                        </div>
                                    </div>
                                )
                            }, this)




                        }



                    </div>





                </div>

            </div>
        )
    }
}

export default Userpage;