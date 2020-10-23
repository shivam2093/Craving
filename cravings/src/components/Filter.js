import { AccordionActions } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import React, { Component } from 'react'
import {
    Row,
    Col,
    Container,
    Accordion,
    Button,
    Card,
    Form,
    Spinner,
    ListGroup,
    Dropdown
} from "react-bootstrap";
import Icofont from "react-icofont";
import './Filter.css'






class Filter extends Component {





    render() {

        /*
        const people = [
            { name: 'Rating:' },
            { name: 'Cost:' },
            { name: 'Popularity:' }
        ];
*/
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
                                        <Dropdown.Toggle variant="success" id="dropdown-basic" >
                                            Dropdown Button
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>


                                        {/*
                                        <select defaultValue="Sort" onChange={this.props.sortitems} >
                                            <option disabled value="sort">Cost</option>
                                            <option>High to Low</option>
                                            <option>Low to high</option>
                                        </select>
                                        */}
                                    </span>
                                </div>
                                <div id="filterby_rating">
                                    <h5>Rating </h5>
                                    <span >
                                        <select defaultValue="Sorting" onChange={this.props.sortratings}>
                                            <option disabled value="Sorting">Rating</option>
                                            <option>High to Low</option>
                                            <option>Low to High</option>
                                        </select>
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
