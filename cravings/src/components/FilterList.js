import React from 'react'
import ImageIcon from '@material-ui/icons/Image';
import {

    Button
} from "react-bootstrap";
import { Link } from 'react-router-dom';

const FilterList = (props) => {


    props.nearByRestaurant.map((images) => {


        console.log(images.hasOwnProperty('thumb'));
        if (images.hasOwnProperty('thumb') === false) {

            images.thumb = <div>0000</div>
        }

    })


    return (
        <div className="searchallresults">
            {
                props.nearByRestaurant.map((restaurantObj, index) => {
                    var item = restaurantObj.restaurant;
                    return (

                        <div className="gb" key={index}>

                            <div>
                                <img id="img" src="https://b.zmtcdn.com/data/pictures/4/17392094/40b0cd14c7bf4726572060e4cb0b6ebf_featured_v2.jpg?output-format=webp&fit=around|1029:555&crop=100:55;*,*" />
                            </div>


                            <div className="sx">
                                <Link to="/login">
                                    <h3>{item.name}</h3>
                                </Link>
                                <b> Address: </b> {item.location.address}<br />
                                <b> Cuisine: </b> {item.cuisines} <br />
                                <b> Price: </b> {item.currency} {item.average_cost_for_two === 0 ? (<div className="inline"> -- </div>) : (<div className="inline"> {item.average_cost_for_two} </div>)} <br />
                                <b> Ratings: <span style={{
                                    color: '#' + item.user_rating.rating_color
                                }}>

                                    {item.user_rating.aggregate_rating}  </span></b><br /><br />
                                <b>   <span className="allinOne">
                                    <Button variant="outlined" color="primary" onClick={props.callPhone}> CALL</Button></span> </b>
                            </div>

                        </div>
                    );
                }, this)
            }



        </div>
    )
}

export default FilterList
