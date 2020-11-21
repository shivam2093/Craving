import React, { useState } from 'react'
import Popup from './Popup'
import {
    Button
} from "react-bootstrap";

import { Link } from 'react-router-dom'
import Modal from 'react-modal'

export default function FilterProduct(props) {

    const { item } = props;

    const [modalIsOpen, setModalIsOpen] = useState(false)



    return (
        <div className="gb">
            <div>
                <img id="img" src="https://b.zmtcdn.com/data/pictures/4/17392094/40b0cd14c7bf4726572060e4cb0b6ebf_featured_v2.jpg?output-format=webp&fit=around|1029:555&crop=100:55;*,*" />
            </div>

            <div className="sx" key={item.restaurant_id}>


                <Link to={`/Order/${item.restaurant_id}`}>
                    <h3>{item.restaurant_name}</h3>
                </Link>

                <b> Address: </b> {item.address.formatted}<br />
                <b> Cuisine: </b> {item.cuisines} <br />
                <b> Price: </b> {item.price_range}  <br />
                {/*

    <b> Address: </b> {item.location.address}<br />
    <b> Cuisine: </b> {item.cuisines} <br />
    <b> Price: </b> {item.currency} {item.average_cost_for_two === 0 ? (<div className="inline"> -- </div>) : (<div className="inline"> {item.average_cost_for_two} </div>)} <br />
    <b> Ratings: <span style={{
        color: '#' + item.user_rating.rating_color
    }}>
       
        {item.user_rating.aggregate_rating}  </span></b><br /><br />
    
    */}

                <b>   <span className="allinOne">
                    <Button variant="outlined" color="primary" onClick={() => setModalIsOpen(true)}> CALL</Button></span> </b>
                <Modal isOpen={modalIsOpen}>
                    <b> Call :</b> {item.restaurant_phone} <br />
                    <div>
                        <Button size="medium" style={{ width: 100 }} color="primary" onClick={() => setModalIsOpen(false)}> Close </Button>
                    </div>
                </Modal>


            </div>

        </div>


    )
}
