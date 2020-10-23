import React from 'react'
import ImageIcon from '@material-ui/icons/Image';
import {

    Button
} from "react-bootstrap";

const FilterList = (props) => {
    return (
        <div className="searchallresults">
            {
                props.nearByRestaurant.map(function (restaurantObj, index) {
                    var item = restaurantObj.restaurant;

                    /*
                    const sortedRestaurants = this.state.nearByRestaurant.sort((a, b) => {
    
                        if (this.state.sort === 'High to Low') {
    
                            return item[a].average_cost_for_two - item[b].average_cost_for_two;
    
                        }
    
                    })
    */
                    return (

                        <div className="gb" key={index}>

                            <div>
                                <img src={item.thumb} />
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
                                    <Button variant="outlined" color="primary" onClick={props.callPhone}> CALL</Button></span> </b>
                            </div>
                        </div>
                    )
                }, this)
            }



        </div>
    )
}

export default FilterList
