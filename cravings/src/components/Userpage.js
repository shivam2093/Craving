
import './Userpage.css'
import $ from "jquery"

import Filter from './Filter'
import React, { Component } from 'react'
import Footer from './Footer';
import {
    Row,
    Col,
    Container,
    Button, Image
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import ImageIcon from '@material-ui/icons/Image';
import FilterList from './FilterList'
import { keys } from '@material-ui/core/styles/createBreakpoints';



class Userpage extends Component {


    constructor(props) {
        super(props)

        this.state = {

            cuisine: '',
            nearByRestaurant: [],
            operation: 'Search',
            searchRes: '',
            sort: '',
            sortRating: ''

        };


    }

    onChange = (event) => {

        this.setState({

            searchRes: event.target.value

        })

    }

    sortitems = (e) => {

        console.log(e.target.value)
        this.setState({ sort: e.target.value })
    }

    sortratings = (e) => {
        console.log(e.target.value)
        this.setState({ sortRating: e.target.value })
    }


    callPhone = (event) => {



    }

    search = (event) => {
        var $this = this;

        $this.setState({
            operation: 'Searching..'
        })

        navigator.geolocation.getCurrentPosition(function (position) {



            var lat = position.coords.latitude;
            var lng = position.coords.longitude;

            /*var url = 'https://cors-anywhere.herokuapp.com/http://developers.zomato.com/api/v2.1/search?start=0&count=10&lat=' + lat + '&lon=' + lng +
                '& radius=5000000 & cuisines=' + $this.state.cuisine;*/

            $.ajax({

                url: 'https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?start=0&count=10&lat=' + lat + '&lon=' + lng +
                    '&radius=500000&cuisines=' + $this.state.cuisine + '&q=' + $this.state.searchRes,
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



        const sortedRestaurants = this.state.nearByRestaurant.sort((a, b) => {

            /* console.log(a.restaurant.user_rating.aggregate_rating) */

            if (this.state.sort === 'Low to high') {

                return (a.restaurant.average_cost_for_two - b.restaurant.average_cost_for_two);

            }
            else if (this.state.sort === 'High to Low') {

                return (b.restaurant.average_cost_for_two - a.restaurant.average_cost_for_two);
            }
            else if (this.state.sortRating === 'High to Low') {

                return (b.restaurant.user_rating.aggregate_rating - a.restaurant.user_rating.aggregate_rating);

            }
            else if (this.state.sortRating === 'Low to High') {

                return (a.restaurant.user_rating.aggregate_rating - b.restaurant.user_rating.aggregate_rating);

            }
        })

        return (
            <div className="user_home">
                <Image src={window.location.origin + '/img/Cravings.png'} alt="html5" className="img_style" style={{ width: "100%" }} />

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
                    <div className="searchplace" >
                        <input type="text" placeholder="Cravings" value={this.state.searchRes} style={{ width: 300 }} onChange={this.onChange} sortitems={this.sortitems} sortratings={this.sortratings} />
                        <Button value={this.state.operation} onClick={this.search} style={{ width: 100 }}> Search </Button>

                    </div>

                    <Row md={4} >
                        <Col> <Filter sortitems={this.sortitems} sortratings={this.sortratings} /></Col>

                        <Col xs={6}>

                            <FilterList nearByRestaurant={sortedRestaurants} />

                            {/*
                            <div className="searchallresults">
                                {
                                    this.state.nearByRestaurant.map(function (restaurantObj, index) {
                                        var item = restaurantObj.restaurant;

                                        const sortedRestaurants = this.state.nearByRestaurant.sort((a, b) => {

                                            if (this.state.sort === 'High to Low') {

                                                return item[a].average_cost_for_two - item[b].average_cost_for_two;

                                            }

                                        })

                                        return (

                                            <div className="gb" key={index}>

                                                <div>
                                                    <img src={item.thumb.hasOwnProperty('thumb') === false ? (<div className="thumnail"> <ImageIcon /> </div>) : (<div>{item.thumb}</div>)} />
                                                </div>
                                                <div className="sx">

                                                    <h3>{item.name}</h3>

                                                    <b> Address: </b> {item.location.address}<br />
                                                    <b> Cuisine: </b> {item.cuisines} <br />
                                                    <b> Price: </b> {item.currency} {item.average_cost_for_two === 0 ? (<div className="inline"> -- </div>) : (<div className="inline"> {item.average_cost_for_two} </div>)} <br />
                                                    <b> Ratings: <span style={{
                                                        color: '#' + item.user_rating.rating_color
                                                    }}>

                                                        {item.user_rating.aggregate_rating}  </span></b><br /><br />
                                                    <b>   <span className="allinOne">
                                                        <Button variant="outlined" color="primary" onClick={this.callPhone}> CALL</Button></span> </b>
                                                </div>
                                            </div>
                                        )
                                    }, this)
                                }



                            </div>

                            */}

                        </Col>
                    </Row>


                </div>

                <section className="footer">

                    <Footer></Footer>
                </section>

            </div>

        )
    }
}

export default Userpage;