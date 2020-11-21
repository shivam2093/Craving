
import './Userpage.css'
import $ from "jquery"
import Pagination from './Pagination'
import Filter from './Filter'
import React, { Component } from 'react'
import Footer from './Footer';
import {
    Row,
    Col,
    Container,
    Button, Image
} from "react-bootstrap";
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ImageIcon from '@material-ui/icons/Image';
import FilterList from './FilterList'
import { keys } from '@material-ui/core/styles/createBreakpoints';
import CategoriesProduct from './CategoriesProduct'
import Title from './Title'



class Userpage extends Component {

    constructor(props) {
        super(props)

        this.state = {

            cuisine: '',
            nearByRestaurant: [],
            operation: 'Search',
            searchRes: '',
            sort: '',
            sortRating: '',
            showPopup: false,
            currentPage: 1,
            postPerPage: 5,

        };


    }


    onChange = (event) => {

        console.log(event.target.value)

        this.setState({

            searchRes: event.target.value

        })

    }

    sortitems = (e) => {

        console.log(e.value)
        this.setState({ sort: e.value })
    }

    sortratings = (e) => {
        console.log(e.value)
        this.setState({ sortRating: e.value })
    }


    callPhone = () => {


        this.setState({

            showPopup: true
        })

    }

    reset = (event) => {

        this.setState({

            nearByRestaurant: []
        })
    }





    search = (event) => {
        event.preventDefault();



        var $this = this;

        $this.setState({
            operation: 'Searching..'
        })


        navigator.geolocation.getCurrentPosition(function (position) {

            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            let apiKey = process.env.x - rapidapi - key;

            console.log(lat)
            console.log(lon)

            /*var url = 'https://cors-anywhere.herokuapp.com/http://developers.zomato.com/api/v2.1/search?start=0&count=10&lat=' + lat + '&lon=' + lng +
                '& radius=5000000 & cuisines=' + $this.state.cuisine;*/
            /* 
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
        */

            $.ajax({



                url: 'https://cors-anywhere.herokuapp.com/https://us-restaurant-menus.p.rapidapi.com/restaurants/search?distance=3&lat=' + lat + '&page=1&lon=' + lon + '?q=' + $this.state.searchRes,
                type: "GET",
                "headers": {

                    "x-rapidapi-key": `${apiKey}`,
                    "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com"
                }
            }).done(function (result) {

                $this.setState({
                    nearByRestaurant: result.result.data,
                    operation: 'Search'
                })

            })




        })
    }




    render() {

        const indexOfLastPost = this.state.currentPage * this.state.postPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postPerPage;
        const currentPosts = this.state.nearByRestaurant.slice(indexOfFirstPost, indexOfLastPost)
        const paginate = (pageNumber) => {
            this.setState({
                currentPage: pageNumber
            })
        }
        {/*   
        const sortedRestaurants = this.state.nearByRestaurant.sort((a, b) => {

             console.log(a.restaurant.user_rating.aggregate_rating) 

            if (this.state.sort === 'Low to High') {

                return (a.restaurant.average_cost_for_two - b.restaurant.average_cost_for_two);

            }
            else if (this.state.sort === 'High to Low') {

                return (b.restaurant.average_cost_for_two - a.restaurant.average_cost_for_two);
            }
            else if (this.state.sortRating === 'H to L') {

                return (b.restaurant.user_rating.aggregate_rating - a.restaurant.user_rating.aggregate_rating);

            }
            else if (this.state.sortRating === 'L to H') {

                return (a.restaurant.user_rating.aggregate_rating - b.restaurant.user_rating.aggregate_rating);

            }
        })
        */}



        return (
            <div className="user_home">
                <Image src={window.location.origin + '/img/Cravings.png'} alt="html5" className="img_style" />


                <Title
                    title="Offers Near You"
                    subTitle="Best deals at your favourite restaurants"
                />


                <div className="foodsection">

                    <h1> Food </h1>
                    <div className="searchplace" >
                        <input type="text" placeholder="Cravings" value={this.state.searchRes} style={{ width: 300 }} onChange={this.onChange} /*sortitems={this.sortitems} sortratings={this.sortratings} */ />
                        <Button value={this.state.operation} onClick={this.search} style={{ width: 100 }} target="_blank"> Search </Button>
                        <Button onClick={this.reset} style={{ width: 100 }}> Reset </Button>
                    </div>

                    <Row md={4} >
                        <Col> <Filter sortitems={this.sortitems} sortratings={this.sortratings} /></Col>

                        <Col xs={6}>





                            <FilterList  /* nearByRestaurant={sortedRestaurants} */ nearByRestaurant={currentPosts} showPopup={this.callPhone} /> <br />



                            <Pagination postPerPage={this.state.postPerPage} totalPosts={this.state.nearByRestaurant.length} paginate={paginate} />
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