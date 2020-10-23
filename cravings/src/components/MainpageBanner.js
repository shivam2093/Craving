import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import "./MainpageBanner.css";


class MainpageBanner extends Component {
    render() {
        return (
            <>
                <div className="banner">
                    <div className="image">


                        <div className="image_color" >

                            <div className="image_wrapper">
                                <img style={{ width: "100%" }} alt="" src="https://raster-static.postmates.com?url=https://buyer-static-gcp.postmates.com/dist/prod/ready-to-order-background.868dad4cfe737319353ca31db154b91c1c1407a023210d64b28cdeba8c98e4de57e17b54f3e8e5e01c8285abb33889b142c3edb03f26a211e177cc26182a6f0b.jpg&amp;quality=85&amp;w=3480&amp;h=0&amp;mode=auto&amp;format=webp&amp;v=4" ></img>
                            </div>
                            <div className="text">
                                <div className="first_text">
                                    <h2>Ready to Order?</h2>
                                </div>
                                <div className="second_text">
                                    <p> Browse local restaurants nearby </p>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>

            </>
        )
    }
}

export default MainpageBanner