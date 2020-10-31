import { AccordionActions } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import React, { Component } from 'react'
import {
    Container
} from "react-bootstrap";
import Icofont from "react-icofont";
import './Filter.css'
import Select from 'react-select'
import { data } from 'jquery';






class Filter extends Component {





    render() {

        /*
        const people = [
            { name: 'Rating:' },
            { name: 'Cost:' },
            { name: 'Popularity:' }
        ];
*/
        const options = [
            {
                value: 'H to L', label: 'High to Low'
            },
            { value: 'L to H', label: 'Low to High' }
        ]

        const costoptions = [
            {
                value: 'High to Low', label: 'High to Low'
            },
            { value: 'Low to High', label: 'Low to High' }
        ]

        const categories = [
            {
                value: 'Delivery', label: 'delivery'
            },
            { value: 'Dine-out', label: 'dine-out' },
            { value: 'Catching-up', label: 'catching-up' },
            { value: 'Takeout', label: 'takeout' },
            { value: 'Cafes', label: 'cafes' }

        ]


        return (
            <div className="filter">
                <section>
                    <Container>

                        <div className="all_filters" style={{ width: 250, border: 'solid', height: 500, marginTop: 42 }}>
                            <div className="filters_body">
                                <h3> Filter </h3>
                            </div>
                            <hr />
                            <div className="sort_items">
                                <div ClassName="sortby_cost">
                                    <h4 >Cost</h4>
                                    <span >

                                        <Select options={costoptions} defaultValue="cost" onChange={this.props.sortitems} />

                                    </span>
                                </div>

                                <div id="rating">
                                    <h5>Rating</h5>
                                    <span >
                                        <Select options={options} defaultValue="ratings" onChange={this.props.sortratings} />
                                    </span>

                                </div>


                                <div id="categories">
                                    <h5>Categories</h5>
                                    <span >
                                        <Select options={categories} />
                                    </span>

                                </div>
                                <div className="recently_added">
                                    <button className="btn_success"> Recently added </button>
                                </div>
                            </div>
                        </div>



                    </Container>



                </section>


            </div>
        )
    }


}

export default Filter
