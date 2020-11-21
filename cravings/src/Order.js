import React, { Component, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import $ from "jquery"
import { makeStyles } from '@material-ui/core/styles';
import HeaderNavUser from './HeaderNavUser'
import Footer from './components/Footer'

import Title from './components/Title';

const Order = () => {

    const { restaurant_id } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        loadData();

    }, { restaurant_id })

    const loadData = () => {


        var apiKey = process.env.KEY;
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": `https://us-restaurant-menus.p.rapidapi.com/restaurant/${restaurant_id}/menuitems?page=1`,
            "method": "GET",
            "headers": {
                "x-rapidapi-key": `${apiKey}`,
                "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com"
            }
        };

        $.ajax(settings).done(function (response) {

            console.log(response.result.data)

            setData(response.result.data)
        });





    }
    const useStyles = makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(1),
        },
        extendedIcon: {
            marginRight: theme.spacing(1),
        },
    }));
    const classes = useStyles();

    if (!data) return <div>Loading !</div>

    return (
        <>
            <HeaderNavUser />
            <Title
                title="Now order"
                subTitle="Order and don't get strive "
            />
            <div className="row">
                <div className="col" style={{ padding: '10%' }}>
                    <div className="Menu_list" >
                        <h1> Menu List</h1>
                        <div className="selected_name" style={{ justifyContent: "space-between" }} >
                            {
                                data.map((x) => {
                                    return (
                                        <div className="row" >
                                            <div className="col" >

                                                <b> Item:    </b> <h4> {x.menu_item_name}</h4> <br />
                                                <b> Cuisine: </b>  <h4> {x.cuisines}</h4> <br />
                                                <b> Pricing: </b>  <h3>{x.menu_item_pricing === 0 ? (<h6>Price not listed</h6>) : (x.menu_item_pricing.forEach(element => {
                                                    return <h6> {element} </h6>
                                                }))}</h3>  <br />
                                            </div>
                                            <div className="col" style={{ padding: "5%" }}>
                                                <Button size="medium" className={classes.margin} color="primary">
                                                    Add to Order
                                            </Button>
                                            </div>
                                        </div>
                                    )

                                })
                            }

                        </div>


                    </div>


                </div>
            </div>
            <Footer />
        </>
    )
}


export default Order
